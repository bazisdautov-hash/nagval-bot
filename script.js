const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const formatRub = (value) => new Intl.NumberFormat("ru-RU").format(Math.round(value));

const amountInput = document.getElementById("amount");
const monthsInput = document.getElementById("months");
const rateInput = document.getElementById("rate");
const calcBtn = document.getElementById("calc-btn");
const calcResult = document.getElementById("calc-result");

function calculate() {
  const amount = Number(amountInput.value || 0);
  const months = Number(monthsInput.value || 0);
  const annualRate = Number(rateInput.value || 0);

  if (amount < 10000 || months < 3 || annualRate <= 0) {
    calcResult.textContent = "Введите корректные параметры: от 10 000 ₽, от 3 месяцев, ставка > 0%.";
    return;
  }

  const profit = amount * (annualRate / 100) * (months / 12);
  const total = amount + profit;
  calcResult.textContent = `Ожидаемая выплата: ${formatRub(total)} ₽ (прибыль ${formatRub(profit)} ₽)`;
}

if (calcBtn) {
  calcBtn.addEventListener("click", calculate);
}

const form = document.getElementById("lead-form");
const statusEl = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const payload = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      budget: document.getElementById("budget").value.trim(),
      createdAt: new Date().toISOString()
    };

    const hasEmpty = Object.values(payload).some((v) => !v);
    if (hasEmpty) {
      statusEl.textContent = "Пожалуйста, заполните все поля формы.";
      statusEl.style.color = "#ffb4b4";
      return;
    }

    const leads = JSON.parse(localStorage.getItem("investor_leads") || "[]");
    leads.push(payload);
    localStorage.setItem("investor_leads", JSON.stringify(leads));

    statusEl.textContent = "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
    statusEl.style.color = "#8ef0b5";
    form.reset();
  });
}

calculate();

// سنة الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// غيّر رقم واتساب إلى رقمك الحقيقي
// المغرب: اكتب 212 ثم رقمك بدون 0 في البداية (مثال: 2126XXXXXXXX)
const phone = "212600000000";

function waLink(text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

const whatsBtn = document.getElementById("whatsBtn");
whatsBtn.href = waLink("مرحبا، أريد طلب كتاب من هدوء. هل يمكن إرسال التفاصيل؟");

// زر أعلى الصفحة ينزل لقسم التواصل
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// أزرار "اطلب الآن" داخل الكتب
document.querySelectorAll("[data-buy]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.getAttribute("data-buy");
    window.open(waLink(`مرحبا، أريد طلب: ${item}.`), "_blank");
  });
});

// فورم تجريبي (بدون إرسال حقيقي)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hint.textContent = "تم استلام رسالتك (تجريبياً). إذا تريد إرسال حقيقي، نربطه بخدمة مجانية.";
  form.reset();
});

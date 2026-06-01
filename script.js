
/* =========================
   SAFE PERFORMANCE FIX
========================= */

.hero img,
.card,
.skill{
will-change: transform;
}

/* ❌ حذف will-change از کل صفحه */
*{
will-change: auto;
}

/* =========================
   MOBILE PERFORMANCE MODE
========================= */

@media (max-width:768px){

/* خاموش کردن hover سنگین */
.card:hover,
.skill:hover,
.btn:hover{
transform:none !important;
box-shadow:none !important;
}

/* سبک کردن انیمیشن‌ها */
.hero img{
animation:none !important;
}

}

/* =========================
   SAFE ANIMATION LIMITER
========================= */

@media (max-width:768px){

/* جلوگیری از فشار GPU */
*{
animation-duration:0s !important;
transition-duration:0.2s !important;
}

}

/* =========================
   FIX SCROLL STABILITY
========================= */

html,body{
overflow-x:hidden;
overscroll-behavior: none;
}

/* =========================
   HERO STABILITY FIX
========================= */

.hero{
transform:none !important;
}

.hero img{
transform:none;
animation: float 5s ease-in-out infinite;
}

/* =========================
   CLEAN CARD SYSTEM
========================= */

.card{
transform:none;
transition:0.3s ease;
}

.card:hover{
transform:translateY(-6px);
}

/* =========================
   PREVENT LAYOUT BREAK
========================= */

section{
transform:none !important;
}

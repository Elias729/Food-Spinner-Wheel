 const foods = [
     '🍕 Pizza', '🍔 Burger', '🍣 Sushi', '🍝 Pasta',
     '🥗 Salad', '🌮 Tacos', '🥪 Sandwich', '🍜 Ramen',
     '🍛 Thai Food', '🍛 Indian Food', '🥡 Chinese Food', '🍖 BBQ',
     '🥙 Mediterranean', '🍖 Korean BBQ', '🍜 Pho'
 ];

 let isSpinning = false;
 let currentRotation = 0;

 function spinWheel() {
     if (isSpinning) return;

     isSpinning = true;
     const button = document.getElementById('spinButton');
     const wheel = document.getElementById('wheel');
     const result = document.getElementById('result');

     button.disabled = true;
     button.textContent = 'SPINNING...';
     result.classList.remove('show');

     // Generate random spin (multiple full rotations + random segment)
     const spins = 5 + Math.random() * 5; // 5-10 full rotations
     const segmentAngle = 360 / foods.length;
     const randomSegment = Math.floor(Math.random() * foods.length);
     const finalAngle = (spins * 360) + (randomSegment * segmentAngle);

     currentRotation += finalAngle;
     wheel.style.transform = `rotate(${currentRotation}deg)`;

     // Show result after animation completes
     setTimeout(() => {
         const selectedFood = foods[randomSegment];
         result.innerHTML = `🎉 Today you should eat: <strong>${selectedFood}</strong>`;
         result.classList.add('show');

         button.disabled = false;
         button.textContent = 'SPIN AGAIN!';
         isSpinning = false;
     }, 4000);
 }

 // Add some interactive hover effects
 document.addEventListener('DOMContentLoaded', function () {
     const segments = document.querySelectorAll('.segment');
     segments.forEach(segment => {
         segment.addEventListener('mouseenter', function () {
             if (!isSpinning) {
                 this.style.filter = 'brightness(1.1)';
             }
         });

         segment.addEventListener('mouseleave', function () {
             this.style.filter = 'brightness(1)';
         });
     });
 });
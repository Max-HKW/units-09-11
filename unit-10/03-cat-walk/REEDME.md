# Cat Walking Animation - Variants

## Overview
This document explains four different variants of a cat-walking animation implemented using JavaScript. The cat moves across the screen in different ways depending on the variant, ranging from simple rightward movement to more complex behaviors, including reversing direction, pausing to change images, and continuous movement across the screen.

---

## Version 1: Basic Cat Walking to the Right

### Description:
In this version, the cat image moves continuously towards the right side of the screen. Every 50 milliseconds, the cat's `left` position is incremented by 10 pixels. The animation continues indefinitely as long as the page is active.

- The **position** of the cat is stored in a variable.
- **`setInterval()`** is used to call a function that updates the cat's position every 50 milliseconds.
- The **cat's position** is updated by adding a fixed value (10px) to its current position. This causes the cat to move smoothly to the right.

### Key Points:
- The animation is simple and doesn’t involve any changes in direction or image.
- The movement is purely linear to the right, which makes it ideal for continuous, non-stop animations.
- The cat will keep moving until the page is refreshed or the animation is stopped.

---

## Version 2: Cat Restarts from Left When Reaching the Right

### Description:
This variant introduces a loop, so when the cat reaches the right side of the screen, it restarts from the left side. This creates an infinite animation where the cat continuously moves to the right and then reappears on the left.

- **`screenWidth`** is used to determine the width of the browser window, and **`catWidth`** gives the width of the cat image.
- When the cat’s position exceeds the **`screenWidth`**, it’s reset to the left side, at a position slightly off-screen (using `-catWidth`).
- The cat then moves to the right again, and this cycle repeats indefinitely.

### Key Points:
- The animation has a seamless loop where the cat restarts from the left side once it reaches the right.
- This behavior creates an endless walking loop, which could be used for decorative or background animations.

---

## Version 3: Cat Bounces Between Left and Right

### Description:
In this version, the cat moves between the left and right sides of the screen. When it reaches the edges, the cat reverses direction. This creates a "bouncing" effect where the cat walks forward and backward repeatedly.

- **`direction`** is introduced as a variable to control whether the cat moves to the right (1) or to the left (-1).
- When the cat reaches the right or left edge of the screen, **`direction`** is multiplied by -1 to reverse the cat's direction.
- **`scaleX`** is used to flip the cat’s image horizontally, so the cat appears to turn around when it changes direction.
- The **`position`** is updated by 10 pixels in the direction the cat is currently moving.

### Key Points:
- The animation features a realistic "bounce" effect where the cat changes direction when hitting the edges of the screen.
- The **`scaleX`** property ensures the cat appears to turn around, simulating a reversal of direction visually.
- This makes the cat seem like it’s bouncing between two points rather than simply moving to the right.

---

## Version 4: Cat Pauses in the Middle and Changes Image

### Description:
This version enhances the previous one by introducing an event where the cat pauses in the center of the screen, changes its image, and then resumes its movement. After the pause, the cat's original image is restored, and the walking continues with the bouncing behavior.

- The cat checks if its **`position`** is near the center of the screen by comparing it to the **`middle`** position, calculated as half of the screen width minus the cat's width.
- When the cat reaches the middle, it changes its image to a new one (using **`cat.src`**).
- The cat stays in the center for **10 seconds**, during which it pauses and doesn't move. This is achieved using **`setTimeout()`**.
- After the pause, the cat's image is restored to the original one, and it resumes moving back and forth (as in Version 3).
- To avoid the cat getting stuck at the center, its position is slightly adjusted after the pause.

### Key Points:
- The cat's image changes when it reaches the middle of the screen, providing a dynamic visual effect.
- **`setTimeout()`** is used to pause the animation for 10 seconds in the middle, allowing the new image to be displayed.
- After the pause, the animation resumes with the bouncing movement, making it feel like the cat has completed a sequence and is now continuing its journey.
- This version adds a more interactive and engaging element to the animation, making it more visually interesting for users.

--- 

## Conclusion

These four variants of the cat-walking animation progressively introduce new behaviors. Starting with simple movement, they evolve into more complex animations involving direction changes, pausing, and image replacement. These variations provide a good foundation for creating more sophisticated and interactive animations for the web.

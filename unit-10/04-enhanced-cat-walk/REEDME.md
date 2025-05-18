# 🐱 Cat Walk Controller

A controllable animation of a cat walking from left to right across the screen.  
The user can **start**, **stop**, **speed up**, and **slow down** the animation using the provided buttons.

---

## 🚀 Features

- Start the cat animation
- Stop the cat animation
- Increase or decrease the cat’s walking speed
- Real-time speed info display
- Buttons are dynamically enabled/disabled based on the animation state

---

## How it works 

- Start: Begins the animation using setInterval

- Stop: Clears the interval and stops movement

- Faster / Slower: Adjusts the interval time (min 10ms, max 500ms)

- Info area: Updates with current speed every time speed changes

- Button states: Automatically enabled/disabled based on state and limits
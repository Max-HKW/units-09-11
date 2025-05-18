/**
 * @file main.js
 * @author Massimo Musso
 * @description A simulation of a dishwasher system with 3 stacks of dirty dishes and 1 stack of clean dishes.
 *              The system washes dishes asynchronously with random delays and dynamically updates the DOM.
 */

/**
 * Represents a stack of dishes.
 */
class Stack {
    /**
     * Creates a new stack.
     * @param {string} name - The name of the stack (e.g., "Dirty Stack 1").
     */
    constructor(name) {
      this.stack = [];
      this.name = name;
    }
  
    /**
     * Adds a dish to the top of the stack.
     * @param {string} dish - The dish to add.
     */
    push(dish) {
      this.stack.push(dish);
    }
  
    /**
     * Removes and returns the dish on top of the stack.
     * @returns {string} The removed dish.
     */
    pop() {
      return this.stack.pop();
    }
  
    /**
     * Returns the dish on top without removing it.
     * @returns {string} The top dish.
     */
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
      return this.stack.length === 0;
    }
  
    /**
     * Returns the number of dishes in the stack.
     * @returns {number} The size of the stack.
     */
    size() {
      return this.stack.length;
    }
  
    /**
     * Returns a copy of the stack as an array.
     * @returns {string[]} An array representation of the stack.
     */
    toArray() {
      return [...this.stack];
    }
  }
  
  /**
   * Simulates a dishwasher system with multiple dirty stacks and one clean stack.
   */
  class DishWasher {
    /**
     * Initializes the dishwasher with 3 dirty stacks and 1 clean stack.
     */
    constructor() {
      this.dirtyStacks = [
        new Stack('Dirty Stack 1'),
        new Stack('Dirty Stack 2'),
        new Stack('Dirty Stack 3'),
      ];
      this.cleanStack = new Stack('Clean Stack');
  
      this.initStack();
      this.drawStack();
    }
  
    /**
     * Populates the dirty stacks with a random number of plates (10–15 per stack).
     */
    initStack() {
      this.dirtyStacks.forEach((stack, i) => {
        const count = Math.floor(Math.random() * 6) + 10;
        for (let j = 0; j < count; j++) {
          stack.push(`Plate ${j + 1} [DS${i + 1}]`);
        }
      });
    }
  
    /**
     * Washes up to two dishes from the dirty stacks and moves them to the clean stack.
     */
    washDish() {
      let washed = 0;
      for (const stack of this.dirtyStacks) {
        if (!stack.isEmpty() && washed < 2) {
          const dish = stack.pop();
          this.cleanStack.push(dish);
          washed++;
        }
      }
    }
  
    /**
     * Updates the DOM to display the current state of all stacks.
     */
    drawStack() {
      const container = document.getElementById('stacks-container');
      container.innerHTML = '';
  
      [...this.dirtyStacks, this.cleanStack].forEach((stack) => {
        const div = document.createElement('div');
        div.className = 'stack' + (stack === this.cleanStack ? ' clean' : '');
        const title = document.createElement('h3');
        title.textContent = stack.name;
        div.appendChild(title);
  
        stack
          .toArray()
          .slice()
          .reverse()
          .forEach(dish => {
            const plate = document.createElement('div');
            plate.className = 'plate';
            plate.textContent = dish;
            div.appendChild(plate);
          });
  
        container.appendChild(div);
      });
    }
  
    /**
     * Runs the simulation, washing all dirty dishes with a random delay between each step.
     * @returns {Promise<void>}
     */
    async runSimulation() {
      while (this.dirtyStacks.some(stack => !stack.isEmpty())) {
        this.washDish();
        this.drawStack();
        await this.delay(Math.random() * 1000 + 500);
      }
      alert('All dishes are clean!');
    }
  
    /**
     * Delays execution for a specified amount of time.
     * @param {number} ms - Milliseconds to wait.
     * @returns {Promise<void>}
     */
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  
  // Create a new dishwasher simulation instance
  const simulation = new DishWasher();
  
  // Attach the simulation trigger to the start button
  const btnStart = document.getElementById('btn-start');
  btnStart.addEventListener('click', () => simulation.runSimulation());
  
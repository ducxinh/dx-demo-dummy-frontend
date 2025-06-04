```ts
import { test, expect } from '@playwright/test';

test.describe('Todo List Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dummy-demo-njndex.web.app');
    await page.getByTestId('feature-link-todo_list').click();
  });

  test('should add, complete and delete a todo item', async ({ page }) => {
    const todoText = 'learn playwright';
    
    // Add todo
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill(todoText);
    await page.getByRole('button', { name: 'Add' }).click();
    
    // Assert todo is added
    const todoTextElement = page.getByTestId('todo-text-1');
    await expect(todoTextElement).toBeVisible();
    await expect(todoTextElement).toHaveText(todoText);

    // Mark as completed
    const checkbox = page.getByTestId('todo-checkbox-1');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await expect(todoTextElement).toHaveClass(/line-through/);

    // Delete todo
    await page.getByRole('button', { name: 'Delete todo' }).click();
    await expect(todoTextElement).not.toBeVisible();
  });
});
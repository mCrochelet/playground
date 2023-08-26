import { test, expect } from '@playwright/experimental-ct-react';
import ImageButton from './image-button';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('ImageButton', () => {
  
  const ImageButtonInstance = <ImageButton name='Google' image='https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg' link='https://google.com' ></ImageButton>;
  test('shows the button name', async ({ mount }) => {

    const component = await mount(ImageButtonInstance);  
    await expect(component.locator('h1')).toContainText('Google');
  });
})
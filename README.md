# Assignment


Build an e-commerce shopping cart application using NextJS or SvelteKit. The application will feature a product listing page showcasing various products with details and an "Add to Cart" functionality. Additionally, a dedicated cart page will allow users to manage items, including quantity adjustments, removal, and total price calculations with potential discounts.

# Technical Specifications
  Frontend Framework Used : **Nextjs**  
  Styling: **Plain CSS**  
  Data Source :  
      - Option 1 [**Used**] : **Create a local JSON file containing product data (product name, image, price, description, etc.)**    
      - Option 2: Utilize an open-source API to fetch product data dynamically


# Detailed Features

## Product Listing Page:
  -  Display at least 6-10 products using a grid layout! ✅
  -  Each product card should include:  
           &nbsp; 1. &nbsp; **Product image**  ✅  
           &nbsp; 2. &nbsp; **Product name**   ✅  
           &nbsp; 3. &nbsp; **Product price (formatted for currency)**  ✅  
           &nbsp; 4. &nbsp; **"Add to Cart" button**  ✅  


## Add to Cart Functionality:
- Clicking the "Add to Cart" button on a product should:  
    &nbsp; 1. &nbsp;   **Add the chosen product to a user's virtual shopping cart.** ✅  
    &nbsp; 2. &nbsp;   **Update the cart icon or a dedicated counter to reflect the number of added items (optional).** ✅  
    &nbsp; 3. &nbsp;   **Provide visual feedback (e.g., animation) confirming the item's addition.** ✅  

 
## Cart Page:
  - Display a dedicated cart page where users can manage their selected products. ✅  
  - he cart page should include:  
        &nbsp; A list of all added products, displaying:  
            &nbsp; 1. &nbsp; **Product image** ✅  
            &nbsp; 2. &nbsp; **Product name**  ✅  
            &nbsp; 3. &nbsp; **Product price** ✅  
            &nbsp; 4. &nbsp; **Quantity selector (up/down buttons or input field) to adjust the amount of each item.** ✅  
            &nbsp; 5. &nbsp; **"Remove Item" button to delete a specific product from the cart.** ✅  
    - Cart summary section:  
          &nbsp; 1. &nbsp; **Subtotal: Calculate the total cost of all items in the cart based on their quantity and price.** ✅  
          &nbsp; 2. &nbsp; **Discounts (optional): Implement the ability to apply discounts on the total price.**   
    - This could involve:  
            &nbsp; 1. &nbsp; **Fixed discounts (e.g., "$10 off")**  
            &nbsp; 2. &nbsp; **Percentage discounts (e.g., "10% off")** ✅  

    - Total price (including discounts): Display the final price the user needs to pay. ✅
      
    - Checkout button (optional): This can redirect to a simulated checkout page or provide a message indicating successful cart addition.

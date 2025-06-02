import Nav from "@/components/Nav";
import Options from "@/components/options";

function Cart() {

  let isLoged = localStorage.getItem("isLoged")
  return (
      
    <div>
      <Nav/>
      {
        isLoged == "true" ? (
          <Options imageUrl="" />

        ) : null
      }
    </div>
      
    
  )
}

export default Cart;

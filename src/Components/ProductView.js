import Product from "./Product";
import Data from "../data/productData";

function ProductView() {
    // console.log(Data);
  return (
    <>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Paper elevation={3} sx={{ width: { xs: 1, md: "320" } }}>
          {Data.map(dt =><Product 
              key={dt.id}
              category={dt.category}
              description={dt.description}
              image={dt.image}
              price={dt.price}
              rating={dt.rating}
              title={dt.title}
            ></Product>
          )}
        </Paper>
      </Box>
    </>
  );
}

export default ProductView;

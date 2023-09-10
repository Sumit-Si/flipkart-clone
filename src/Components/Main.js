import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import "./Main.css";
import { useState } from "react";

function Main() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack sx={{ py: 2 }}>
        <Typography variant="p" sx={{ px: 2 }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "0.74rem" }}>
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography sx={{ fontSize: "0.74rem" }} color="text.primary">
              Breadcrumbs
            </Typography>
          </Breadcrumbs>
        </Typography>
        <Typography variant="p" sx={{ p: 1, px: 2, fontSize: "0.74rem" }}>
          If you want to stay on top of the fashion trends, then you need to
          shop for the latest and trendiest topwear from an e-commerce site
          Flipkart. Check out the amazing collection of topwear for women online
          and select the ones that suit you the best. Browse through stylish
          women’s topwear that are offered by popular brands, such as Only,
          Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy
          tops with jeggings and sandals to nail the perfect casual look. Try
          pairing crop tops with denim shorts for the perfect summer look. Also,
          check out trendy topwear for men online that are sold by brands, such
          as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and more. Men
          can pair polo shirts & T-shirts with chinos and loafers for the
          perfect brunch or picnic look. To nail the perfect office look, men
          can pair formal shirts with trousers and formal shoes to look dapper
          and stylish. You can also buy trendy and fashionable topwear for kids
          from your favorite online shopping site. From T-shirts and tops to
          shirts and frocks, you can find fashionable and comfortable clothes
          online for your little ones. The information you are reading has been
          last updated on 09-Sep-23.
        </Typography>
        <Stack direction={"row"} alignItems={"center"} px={2} my={1}>
          <Typography variant="h5" sx={{ fontSize: "0.98rem" }}>
            Topwear
          </Typography>
          <Typography variant="p" sx={{ fontSize: "0.78rem", ml: 0.8 }}>
            (Showing 1 – 40 products of 46,886 products)
          </Typography>
        </Stack>
        <Stack ml={2}>
          <Typography variant="h6" sx={{ fontSize: "0.84rem"}} display={'flex'} justifyContent={'start'} alignItems={'center'}>
            Sort By
            <Box>
              <Tabs value={value} onChange={handleChange} sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                <Tab label="Popularity" sx={{fontSize:'0.84rem',textTransform:'capitalize',p:'0.6em'}} />
                <Tab label="Price" sx={{fontSize:'0.84rem',textTransform:'capitalize',p:'0.6em'}} />
                <Tab label="Low to High Price" sx={{fontSize:'0.84rem',textTransform:'capitalize',p:'0.6em'}} />
                <Tab label="High to Low" sx={{fontSize:'0.84rem',textTransform:'capitalize',p:'0.6em'}} />
                <Tab label="Newest First" sx={{fontSize:'0.84rem',textTransform:'capitalize',p:'0.6em'}} />
              </Tabs>
            </Box>
          </Typography>
        </Stack>
        <Stack py={1}>
          
        </Stack>
      </Stack>
    </>
  );
}

export default Main;

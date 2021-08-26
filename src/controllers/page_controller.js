
const pageFirst = (req,res)=> {
 res.render('index',{layout : './layout/page_layout'});
}
const pageSale = (req,res)=> {
            

    res.render('sale',{layout : './layout/sale_layout'});
   }
   const pageSalePOST=async(req,res) => {



   }

module.exports = {
    pageFirst,
    pageSale,
    pageSalePOST
}
import React from "react";
import { Stack, Pagination } from "@mui/material";

export default function MoviePagination({setPage, currentPage, pages}) {

  const handleOnChange = (page) =>{
    setPage = page
    window.scroll(0,0)
  }
  
  return (
    <Stack spacing={5}>
      <p>components</p>
    <Pagination 
      count={pages}
      color="primary"
      onChange = {(e)=> handleOnChange(e.target.textContent)}
      page={currentPage}
    />
  </Stack>
  );
}
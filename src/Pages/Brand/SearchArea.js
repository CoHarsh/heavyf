import React from 'react';
import { TextField, Box, Button, Stack } from '@mui/material';

const SearchArea = () => {
  const [searchText,setSearchText] = React.useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column', justifyContent: 'space-between', marginTop: '16px' }}>
      <TextField
        label="Search Creators by Job Description"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        multiline
        rows={4}
        value={searchText}
        sx={{ marginRight: '16px',marginBottom:"16px" }}
      />
      <Stack direction="row" spacing={3}>
        <Button variant="contained"  color="primary">
            Find
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setSearchText("")}>
            Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchArea;

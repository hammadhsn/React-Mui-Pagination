

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { default as data } from "../data.json";
import usePagination from "../helper/pagination";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

console.log(data.slice(0, 5));
export default function MockData() {
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 6;
    const count = Math.ceil(data.length / PER_PAGE);
    const paginatedData = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        paginatedData.jump(p);
    };
    return (

        <Container maxWidth="100%">


            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>


                <Paper elevation={3} sx={{ bgcolor: '#271441', width: "50%", height: '70vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <p style={{ color: 'white' }}> Pagination Testing with Mock Data</p>
                    {paginatedData?.currentData().map((value) => {
                        return (
                            <Box key={value?.id} pt={1} px={2} sx={{ border: '1px solid', borderColor: 'grey.500', borderRadius: "8px", width: "80%", mt: 4, height: "50px", alignItems: 'center', justifyContent: "space-between" }}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={2}

                                >
                                    <Item> {value?.sku}</Item>
                                    <Item> {value?.model_name}</Item>
                                    <Item> ${value?.msrp}</Item>
                                </Stack>
                            </Box>

                        )
                    })}

                </Paper>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary" />

            </Box>

        </Container>

    );
}
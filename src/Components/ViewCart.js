import React, { useContext } from 'react';
import { Box, Typography, Card, CardContent, Stack, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate, useLocation } from 'react-router-dom';
import CartContext from '../ContextApi/CartContext';

const ViewCart = () => {
    const { cartList, updateCartItem } = useContext(CartContext);
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;
    const isPaymentPage = currentPath === '/payments';

    const handleButtonClick = () => {
        if (isPaymentPage) {
            navigate('/');
        } else {
            navigate('/payments');
        }
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" textAlign="center">
                Cart
            </Typography>
            {cartList.length === 0 ? (
                <Typography variant="body1" textAlign="center">
                    Your cart is empty...
                </Typography>
            ) : (
                cartList.map((item) => (
                    <Card key={item.id} sx={{ mb: 2 }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body1">Price: &#x20B9; {item.price}</Typography>
                                </Box>
                                <Stack direction="row" sx={{ mt: 1 }}>
                                    <Typography
                                        onClick={() => !isPaymentPage && updateCartItem(item, false)}
                                        color="red"
                                        sx={{
                                            padding: 1,
                                            cursor: isPaymentPage ? 'not-allowed' : 'pointer',
                                            opacity: isPaymentPage ? 0.5 : 1,
                                        }}
                                    >
                                        <RemoveIcon />
                                    </Typography>
                                    <Typography variant="body1" sx={{ padding: 1 }}>
                                        {item.count}
                                    </Typography>
                                    <Typography
                                        onClick={() => !isPaymentPage && updateCartItem(item, true)}
                                        color="primary"
                                        sx={{
                                            padding: 1,
                                            cursor: isPaymentPage ? 'not-allowed' : 'pointer',
                                            opacity: isPaymentPage ? 0.5 : 1,
                                        }}
                                    >
                                        <AddIcon />
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                ))
            )}
            {cartList.length > 0 && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6">
                        Total: &#x20B9; {cartList.reduce((total, item) => total + item.count * item.price, 0).toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary"
                    sx={{width:'50%',textTransform:'capitalize'}}
                    onClick={handleButtonClick}>
                        {isPaymentPage ? 'Go Back' : 'Proceed to Payment'}
                    </Button>
                </>
            )}
        </Box>
    );
};

export default ViewCart;

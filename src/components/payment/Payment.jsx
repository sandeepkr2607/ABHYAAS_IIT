import React, { useState } from 'react';
import './Payment.css';
import { useFormik } from 'formik';
import { ValidationSchema } from './schema';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Payment = () => {
  const [card, setCard] = useState(true);
  const [bank, setBank] = useState(false);
  const [upi, setUpi] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCardChange = () => {
    setCard(true);
    setBank(false);
    setUpi(false);
  };
  const handleBankChange = () => {
    setCard(false);
    setBank(true);
    setUpi(false);
  };
  const handleUpiChange = () => {
    setCard(false);
    setBank(false);
    setUpi(true);
  };
  const id = localStorage.getItem('id');
  const initialValues = {
    userId: `${id}`,
    // "userId": "63ca3eeff9987ba8ba37fde2",
    number: '',
    amount: '',
  };

  const redirectToExternalURL = (url) => {
    window.location.href = url;
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ValidationSchema,
      onSubmit: async () => {
        setLoading(true);
        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          };
          console.log(values);
          const response = await fetch(
            `https://api.abhyaasiit.com/api/v1/initiate_payment`,
            options
          );
          const json = await response.json();
          console.log(json.url);
          if (json.success) {
            console.log('Payment received');
            //redirect to success page
            // navigate(`${json.url}`)
            redirectToExternalURL(json.url);
          } else {
            console.log('failed ');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      },
    });

  return (
    <>
      <ChakraProvider>
        <Box width={'100%'}>
          <Box>
            <Header></Header>
          </Box>
          <Center>
            <Box
              boxShadow={'base'}
              width={['100%', '80%']}
              height={['100%', 'auto']}
              rounded={'lg'}
              mx={2}
              marginTop={3}
              marginBottom={[0, 10]}
            >
              <Center>
                <HStack spacing={2} my={8}>
                  <Box
                    bgColor={'orange'}
                    rounded={'xl'}
                    width={{ base: 6, md: 6 }}
                    height={'auto'}
                    textColor={'white'}
                  >
                    1
                  </Box>
                  <Progress
                    value={100}
                    size='sm'
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme='orange'
                    rounded={'md'}
                  />

                  {/* Step 2 */}
                  <Box
                    bgColor={'orange'}
                    rounded={'xl'}
                    width={{ base: 6, md: 6 }}
                    height={'auto'}
                    textColor={'white'}
                  >
                    2
                  </Box>
                  <Progress
                    value={100}
                    size='sm'
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme='orange'
                    rounded={'md'}
                  />

                  {/* Step 3 */}
                  <Box
                    bgColor={'orange'}
                    rounded={'xl'}
                    width={{ base: 6, md: 6 }}
                    height={'auto'}
                    textColor={'white'}
                  >
                    3
                  </Box>
                  <Progress
                    value={100}
                    size='sm'
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme='orange'
                    rounded={'md'}
                  />

                  {/* Step 4 */}
                  <Box
                    bgColor={'orange'}
                    rounded={'xl'}
                    width={{ base: 6, md: 6 }}
                    height={'auto'}
                    textColor={'white'}
                  >
                    4
                  </Box>
                </HStack>
              </Center>

              {/* ----------------Progress bar---------------- */}
              <Divider orientation='horizontal' bgColor={'black'} />

              <section className='antialiased bg-white text-gray-600  py-20'>
                <div
                  className=' main-box relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto'
                  style={{ display: 'flex' }}
                >
                  <div
                    className='bg-white px-8 pb-6 rounded-2xl '
                    style={{
                      border: '1px solid #D9DBE9',
                      marginRight: '1rem',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        paddingBottom: '1rem',
                        paddingBottom: 'auto',
                        paddingTop: 'auto',
                      }}
                    >
                      <h1
                        style={{
                          fontSize: '2em',
                          paddingBottom: '1rem',
                          paddingTop: '1rem',
                        }}
                      >
                        Payment Summary
                      </h1>
                      <thead>
                        <tr
                          className='table-header'
                          style={{ textAlign: 'left' }}
                        >
                          <th
                            style={{
                              paddingLeft: '10px',
                              border: '1px solid black',
                            }}
                          >
                            COURSE DESCRIPTION
                          </th>
                          <th
                            style={{
                              paddingLeft: '10px',
                              paddingRight: '10px',
                              border: '1px solid black',
                            }}
                          >
                            AMOUNT
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ border: '1px solid black', padding: '1px' }}
                      >
                        <tr>
                          <td style={{ border: '1px solid black' }}>
                            <p
                              style={{
                                paddingLeft: '1rem',
                                textAlign: 'left',
                              }}
                            >
                              Registration for AET for Foundation Course
                              (Class-8)
                            </p>

                            <p
                              style={{
                                paddingLeft: '1rem',
                                textAlign: 'left',
                              }}
                            >
                              Fixed GST charges- 18%
                            </p>
                          </td>

                          <td style={{ border: '1px solid black' }}>
                            <p
                              style={{
                                textAlign: 'right',
                                paddingRight: '1rem',
                              }}
                            >
                              ₹500.0
                            </p>

                            <p
                              style={{
                                textAlign: 'right',
                                paddingRight: '1rem',
                              }}
                            >
                              ₹591.0
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              paddingLeft: '1rem',
                              border: '1px solid black',
                              textAlign: 'left',
                            }}
                          >
                            Payment gateway charges- 2.5%
                          </td>
                          <td
                            style={{
                              textAlign: 'right',
                              paddingRight: '1rem',
                              border: '1px solid black',
                            }}
                          >
                            ₹14.77
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              textAlign: 'left',
                              border: '1px solid black',
                              paddingLeft: '1rem',
                              textAlign: 'center',
                            }}
                          >
                            TOTAL
                          </td>
                          <td
                            style={{
                              textAlign: 'right',
                              paddingRight: '1rem',
                              border: '1px solid black',
                            }}
                          >
                            {' '}
                            ₹605.77
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>

                  <div
                    className=' bg-white px-8 pb-6 rounded-2xl '
                    style={{ border: '1px solid #D9DBE9' }}
                  >
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <div
                            className='text-lg font-medium text-black pt-6 '
                            style={{
                              marginBottom: '1rem',
                              paddingTop: '3rem',
                              textAlign: 'left',
                            }}
                          >
                            Payment{' '}
                          </div>
                          <hr style={{ marginBottom: '1rem' }} />
                          <div style={{ marginBottom: '1rem' }}>
                            <label
                              className='text-base font-medium text-black'
                              style={{ display: 'flex', flexDirection: 'row' }}
                            >
                              Pay with :
                            </label>

                            <div className='flex flex-row mt-1'>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  marginRight: '8px',
                                }}
                                onClick={handleCardChange}
                              >
                                <input
                                  type='radio'
                                  style={{ display: 'none' }}
                                  checked={card}
                                />
                                <div
                                  style={{
                                    height: '10px',
                                    width: '10px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    marginRight: '3px',
                                    backgroundColor: card ? '#FF914C' : 'white',
                                    borderColor: '#ccc',
                                  }}
                                />
                                <label style={{ fontSize: '16px' }}>
                                  {card ? <b>Card</b> : <span>Card</span>}
                                </label>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  marginRight: '8px',
                                }}
                                onClick={handleBankChange}
                              >
                                <input
                                  type='radio'
                                  style={{ display: 'none' }}
                                  checked={bank}
                                  onChange={() => {}}
                                />
                                <div
                                  style={{
                                    height: '10px',
                                    width: '10px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    marginRight: '3px',
                                    backgroundColor: bank ? '#FF914C' : 'white',
                                    borderColor: '#ccc',
                                  }}
                                />
                                <label style={{ fontSize: '16px' }}>
                                  {bank ? <b>Bank</b> : <span>Bank</span>}
                                </label>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  marginRight: '8px',
                                }}
                                onClick={handleUpiChange}
                              >
                                <input
                                  type='radio'
                                  style={{ display: 'none' }}
                                  checked={upi}
                                  onChange={() => {}}
                                />
                                <div
                                  style={{
                                    height: '10px',
                                    width: '10px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    marginRight: '3px',
                                    backgroundColor: upi
                                      ? ' #FF914C'
                                      : ' white',
                                    borderColor: '#ccc',
                                  }}
                                />
                                <label style={{ fontSize: '16px' }}>
                                  {upi ? <b>UPI</b> : <span>UPI</span>}
                                </label>
                              </div>
                            </div>
                          </div>
                          {card && (
                            <>
                              <div
                                style={{ marginBottom: '1rem', width: '90%' }}
                              >
                                <label
                                  className='block text-sm font-medium mb-1 text-black'
                                  htmlFor='card-nr'
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  Card Number{' '}
                                </label>
                                <input
                                  id='card-nr'
                                  className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3  shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                  type='text'
                                  placeholder='1234 1234 1234 1234'
                                  style={{ marginTop: '0.5rem', width: '100%' }}
                                />
                              </div>

                              <div
                                className='flex flex-row space-x-4'
                                style={{ marginBottom: '1rem' }}
                              >
                                <div
                                  className='flex-1'
                                  style={{
                                    width: '60%',
                                    paddingRight: '1rem',
                                  }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-expiry'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    Expiration Date{' '}
                                  </label>
                                  <input
                                    id='card-expiry'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3    shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='text'
                                    placeholder='MM/YY'
                                    style={{ marginTop: '0.5rem' }}
                                  />
                                </div>
                                <div
                                  className='flex-1'
                                  style={{ width: '30%' }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-cvc'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    CVV{' '}
                                  </label>
                                  <input
                                    id='card-cvc'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='text'
                                    placeholder='CVV'
                                    style={{ marginTop: '0.5rem' }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {bank && (
                            <>
                              <div
                                style={{ marginBottom: '1rem', width: '90%' }}
                              >
                                <label
                                  className='block text-sm font-medium mb-1 text-black'
                                  htmlFor='card-nr'
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  Card Number{' '}
                                </label>
                                <input
                                  id='card-nr'
                                  className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3  shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                  type='text'
                                  placeholder='1234 1234 1234 1234'
                                  style={{ marginTop: '0.5rem', width: '100%' }}
                                />
                              </div>

                              <div
                                className='flex flex-row space-x-4'
                                style={{ marginBottom: '1rem' }}
                              >
                                <div
                                  className='flex-1'
                                  style={{
                                    width: '60%',
                                    paddingRight: '1rem',
                                  }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-expiry'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    Expiration Date{' '}
                                  </label>
                                  <input
                                    id='card-expiry'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3    shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='text'
                                    placeholder='MM/YY'
                                    style={{ marginTop: '0.5rem' }}
                                  />
                                </div>
                                <div
                                  className='flex-1'
                                  style={{ width: '30%' }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-cvc'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    CVV{' '}
                                  </label>
                                  <input
                                    id='card-cvc'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='text'
                                    placeholder='CVV'
                                    style={{ marginTop: '0.5rem' }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {upi && (
                            <>
                              <div
                                style={{ marginBottom: '1rem', width: '90%' }}
                              >
                                <label
                                  className='block text-sm font-medium mb-1 text-black'
                                  htmlFor='card-nr'
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  Full Name{' '}
                                </label>
                                <input
                                  id='name'
                                  name='name'
                                  className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3  shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                  type='text'
                                  placeholder='full Name'
                                  style={{ marginTop: '0.5rem', width: '100%' }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors && errors.name && touched.name ? (
                                  <span
                                    style={{ color: 'red', marginLeft: '4px' }}
                                  >
                                    {errors.name}
                                  </span>
                                ) : null}
                              </div>

                              <div
                                className='flex flex-row space-x-4'
                                style={{ marginBottom: '1rem' }}
                              >
                                <div
                                  className='flex-1'
                                  style={{
                                    width: '60%',
                                    paddingRight: '40px',
                                  }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-expiry'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    Mobile No{' '}
                                  </label>
                                  <input
                                    id='number'
                                    name='number'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3    shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='text'
                                    placeholder='1234567890'
                                    style={{ marginTop: '0.5rem' }}
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  {errors && errors.number && touched.number ? (
                                    <span
                                      style={{
                                        color: 'red',
                                        marginLeft: '4px',
                                      }}
                                    >
                                      {errors.number}
                                    </span>
                                  ) : null}
                                </div>
                                <div
                                  className='flex-1'
                                  style={{ width: '30%' }}
                                >
                                  <label
                                    className='block text-sm font-medium mb-1 text-black'
                                    htmlFor='card-cvc'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                    }}
                                  >
                                    Amount{' '}
                                  </label>
                                  <input
                                    id='amount'
                                    name='amount'
                                    className='text-sm text-gray-800 bg-white border rounded-2xl leading-5 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                                    type='number'
                                    placeholder='100'
                                    style={{ marginTop: '0.5rem' }}
                                    value={values.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  {errors && errors.amount && touched.amount ? (
                                    <span
                                      style={{
                                        color: 'red',
                                        marginLeft: '4px',
                                      }}
                                    >
                                      {errors.amount}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                            </>
                          )}
                          {card && (
                            <div style={{ marginBottom: '1rem' }}>
                              <label className='label cursor-pointer'>
                                <div className='flex flex-row'>
                                  <input
                                    type='checkbox'
                                    className='checkbox mr-2 checkbox-sm mt-1 '
                                  />{' '}
                                  Save card details
                                </div>
                              </label>
                            </div>
                          )}
                        </div>

                        <div className='mt-3'>
                          <div
                            className='mb-4'
                            style={{ marginBottom: '2rem', marginTop: '1rem' }}
                          >
                            <button
                              type='submit'
                              className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-2xl leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-orange-400 hover:bg-orange-600 text-white focus:outline-none focus-visible:ring-2'
                              style={{
                                borderRadius: '2rem',
                                paddingTop: '0.75rem',
                                paddingBottom: '0.75rem',
                                cursor: 'pointer',
                              }}
                            >
                              Pay{' '}
                            </button>
                          </div>
                          <div className='text-xs text-gray-400  text-start'>
                            Your personel experience will be used to process
                            your order,support your order throughout this
                            website, and for other purposes described in this
                            policy.{' '}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </Box>
          </Center>
          <Box>
            <Footer></Footer>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Payment;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-else-return */
import { CustomInput } from '@/components/formik';
import { Field, useFormikContext } from 'formik';
import React, { useEffect, useRef } from 'react';

const Esewa = () => {
  const { values, setValues } = useFormikContext();
  const collapseContainerRef = useRef(null);
  const cardInputRef = useRef(null);
  const containerRef = useRef(null);
  const checkboxContainerRef = useRef(null);

  const toggleCollapse = () => {
    const cn = containerRef.current;
    const cb = checkboxContainerRef.current;
    const cl = collapseContainerRef.current;

    if (cb && cn && cl) {
      if (values.type === 'Esewa') {
        cardInputRef.current.focus();
        cn.style.height = `${cb.offsetHeight + cl.offsetHeight}px`;
      } else {
        cardInputRef.current.blur();
        cn.style.height = `${cb.offsetHeight}px`;
      }
    }
  };

  useEffect(() => {
    toggleCollapse();
  }, [values.type]);

  const onCreditModeChange = (e) => {
    if (e.target.checked) {
      setValues({ ...values, type: 'Esewa' });
      toggleCollapse();
    }
  };

  const handleOnlyNumberInput = (e) => {
    const { key } = e.nativeEvent;
    if (/\D/.test(key) && key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <>
      <br />
      <span className="d-block padding-s">Regional Payment Options</span>
      <div
        ref={containerRef}
        className={`checkout-fieldset-collapse ${values.type === 'Esewa' ? 'is-selected-payment' : ''}`}
      >
        {/* ---- CHECKBOX TOGGLER ------ */}
        <div className="checkout-field margin-0"  >
          <div className="checkout-checkbox-field" ref={checkboxContainerRef}>
            <input
              checked={values.type === 'Esewa'}
              id="modeEsewa"
              name="type" // the field name in formik I used is type
              onChange={onCreditModeChange}
              type="radio"
            />
            <label
              className="d-flex w-100"
              htmlFor="modeEsewa"
            >
              <div className="d-flex-grow-1 margin-left-s">
                <h4 className="margin-0">Esewa</h4>
                <span className="text-subtle d-block margin-top-s">
                  Do payment on this number and send ScreenShot of the payment
                  <br />
                  <span style={{fontSize: '15px'}}>
                  phone No: +977 9869671451</span>
                </span>
              </div>
              <div className="d-flex" >
                <form method='POST' >
                <label>
                  <input type='email' placeholder="Enter yor email" style={{width: '250px', height: '30px'  }}></input>
                </label>
                </form>
              </div>
            </label>
          </div>
        </div>
        <div className="checkout-collapse-sub" ref={collapseContainerRef}>
          <span className="d-block padding-s text-center">Upload Payment Scrrenshot</span>
          <form action="https://getform.io/f/e526506c-7fe6-4212-ae47-9656dc49988e" method="POST" enctype="multipart/form-data">
          <div className="checkout-cards-accepted d-flex-center">
            <div className='file'>
              <input type='file' name='file' required></input>
            </div>
          </div>
          <br />
          <div className="checkout-field margin-0">
            <div className="checkout-fieldset">
              <div className="checkout-field">
                <Field
                  name="email"
                  type="email"
                  label="Enter your Email"
                  placeholder="example@gmail.com"
                  component={CustomInput}
                  inputRef={cardInputRef}
                  required
                />
              </div>
              <div className="checkout-field">
                <Field
                  name="phoneNumber"
                  type="number"
                  maxLength={10}
                  onKeyDown={handleOnlyNumberInput}
                  label="Phone Number"
                  placeholder="Enter your Phone number"
                  component={CustomInput}
                  required
                />
              </div>
            </div>
            <div className="checkout-fieldset">
              <div className="checkout-field">
                <Field
                name='name'
                type='name'
                label='Enter Your Name'
                placeholder='Your Name'
                component={CustomInput}
                required
                />
              </div>
              <div className="checkout-field">
                <Field
                  name="text"
                  type="text"
                  maxLength={14}
                  label="Enter your Transcation code"
                  placeholder="Transcation Code"
                  component={CustomInput}
                  required
                />
              </div>
            </div>     
            <button className='button' type='submit' style={{height: '20px', marginLeft: '10px'}}>Proseed</button> 
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Esewa;

import { useState } from "react";
import { Bell } from "react-bootstrap-icons"
import { Col,  Row, Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
//import {LoginoutContext}  from './LoginoutContext';
//import { AuthContext } from './AuthContext';
//import { Outlet} from 'react-router-dom';
//import TodoCard from "../components/TodoCard";
//import { TodoContext } from "../contexts/TodoContext";
import "../css/MainContainer.css";
import "../css/Mastercard.css";
import "../css/Style.css";
import "../css/Transactions.css";
import "../css/UserDetails.css";

export default function Home() {
 
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [depositDescription, setDepositDescription] = useState('');
  const [paymentDescription, setPaymentDescription] = useState('');
  const [transferName, setTransferName] = useState('');   
  const [amountError, setAmountError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleDeposit = () => {
    // Add logic for deposit here
    // Update total amount, etc.
    // Update recent transactions
     // Reset previous errors
     setAmountError('');
     setDescriptionError('');
  
  // Validation
  let isValid = true;
  if (!depositAmount || isNaN(depositAmount) || depositAmount <= 0) {
    setAmountError('Please enter a valid deposit amount.');
    isValid = false;
  }
  if (!depositDescription.trim()) {
    setDescriptionError('Please enter a deposit description.');
    isValid = false;
  }
  if (isValid) {
  const newTransaction = {
    type: 'deposit',
    description: depositDescription, // assuming depositDescription is a state variable storing the deposit description
    amount: parseFloat(depositAmount)
  };
  setRecentTransactions([...recentTransactions, newTransaction]);
  // Example logic: Update balance with the deposited amount
  setBalance(balance + parseFloat(depositAmount));    
  setShowDepositModal(false);
  setDepositAmount(0);
  setDepositDescription(null);
  }
};

const handlePayment = () => {
  setAmountError('');
  setDescriptionError('');

// Validation
let isValid = true;

if (!paymentAmount || isNaN(paymentAmount) || paymentAmount < 0) { 
  setAmountError('Please enter a valid payment amount.');
   isValid = false;
} else if (isValid && ((balance - parseFloat(paymentAmount)) < 0)){
  setAmountError('Insufficient balance for this payment. Please close and Enter Deposit Amount.');  
  isValid = false;
} 

if (!paymentDescription.trim()) {
 setDescriptionError('Please enter a deposit description.');
 isValid = false;
}
    
if (isValid) {
    // Add logic for payment here
    // Update total amount, etc.  
    const newTransaction = {
      type: 'payment',
      description: paymentDescription, // assuming paymentDescription is a state variable storing the payment description
      amount: parseFloat(paymentAmount)
    };
    setRecentTransactions([...recentTransactions, newTransaction]);
    // Example logic: Update balance by deducting the payment amount
    setBalance(balance - parseFloat(paymentAmount));  
    setShowPaymentModal(false);
    setPaymentAmount(0);
    setPaymentDescription(null);
  }
};

const handleTransfer = () => {
  setAmountError('');
  setDescriptionError('');

// Validation
let isValid = true;
if (!transferAmount || isNaN(transferAmount) || transferAmount < 0) { 
  setAmountError('Please enter a valid transfer amount.');
   isValid = false;
} else if (isValid && ((balance - parseFloat(transferAmount)) < 0)){
  setAmountError('Insufficient balance for this transfer. Please close and Enter Deposit Amount.');  
  isValid = false;
} 

if (!transferName.trim()) {
  setDescriptionError('Please enter a name.');
  isValid = false;
 }

if (isValid) {
    // Add logic for payment here
    // Update total amount, etc.  
    const newTransaction = {
      type: 'transfer',
      description: transferName, // assuming paymentDescription is a state variable storing the payment description
      amount: parseFloat(transferAmount)
    };
    setRecentTransactions([...recentTransactions, newTransaction]);
    // Example logic: Update balance by deducting the payment amount
    setBalance(balance - parseFloat(transferAmount));    
    setShowTransferModal(false);
    setTransferAmount(0);
    setTransferName(null);
  }
};


  
  const navigate = useNavigate(); 
  const handleLogout = () => {     
     navigate('/Login');
   };
 
   

  return (
    <>
    <Row>
      <Col md={4}>
          
      </Col>
    <Col md={4}>
    <Row className="user-details child-container">
      <Row className="top-section">
        <Col md={2}></Col>
          <Col md={8}className="app-name">Slap N Go E-wallet <Bell size={20} /></Col>        
        <Col md={2}></Col>
      </Row>
        <Row className=""> 
          <Col md={1}></Col>
          <Col md={10}>  
          <div className="mastercard">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="heading_8264">MASTERCARD</p>
                  
                  <svg viewBox="0 0 48 48" height="36" width="36" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg"
                    className="logo">
                    <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path>
                    <path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path>
                    <path
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                      fill="#ff3d00"></path>
                  </svg>

                  <svg xmlSpace="preserve" viewBox="0 0 50 50" height="30px" width="30px" y="0px" x="0px"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" className="chip"
                    version="1.1">
                    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
                                    fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
                                    ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
                                    e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
                                    ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
                                    u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
                                    fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
                                    lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
                                    tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
                                    g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
                                    /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
                                    orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
                                    GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
                                    OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
                                    I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
                                    lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
                                    JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
                                    qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
                                    1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
                                    BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
                                    amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
                                    S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
                                    cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                                    MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                                    LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg==" y="0" x="0" height="50" width="50"
                      id="image0"></image>
                  </svg>

                  <svg xmlSpace="preserve" viewBox="0 0 50 50" height="20px" width="20px" y="0px" x="0px"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                    className="contactless" version="1.1">
                    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
                                  cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
                                  lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
                                  fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
                                  GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
                                  VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
                                  HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
                                  bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
                                  DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
                                  qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
                                  sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
                                  Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
                                  XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
                                  cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
                                  nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
                                  xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
                                  MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
                                  OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
                                  MDowMIXeN6gAAAAASUVORK5CYII=" y="0" x="0" height="50" width="50" id="image0"></image>
                  </svg>
                  <p className="number">9700 1000 0001 0079</p>
                  <p className="valid_thru">VALID THRU</p>
                  <p className="date_8264">1 2 / 2 5</p>
                  <p className="name">Philip Chong</p>
                </div>
                <div className="flip-card-back">
                  <div className="strip"></div>
                  <div className="mstrip"></div>
                  <div className="sstrip">
                    <p className="code">***</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </Col> 
          <Col md={1}></Col>    
        </Row> 
      
        <div className="transfer-options">
          <button type="button" className="option" id="deposit" onClick={() => setShowDepositModal(true)}>Deposit</button>
          <button type="button" className="option" id="payment" onClick={() => setShowPaymentModal(true)}>Payment</button>
          <button type="button" className="option" id="transfer" onClick={() => setShowTransferModal(true)}>Transfer</button>          
        </div>

        <div className="transfer-container">           
           <button type="button" className="option" id="transfer">Balance: ${balance}</button>
        </div>       
      
        <div className="recent-transactions">
         

        <div className="transactions-container">
          <div className="title">
            <p className="heading">RECENT TRANSACTIONS</p>
            <p className="desc">
              <i className="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div className="wrapper">
            {recentTransactions.map((transaction, index) => (
              <div className="transaction" key={index}>
                {transaction.description}: <span style={{ color: transaction.type === 'deposit' ? 'green' : 'red' }}>{transaction.type === 'deposit' ? '+' : '-'}${transaction.amount}</span>
              </div>
            ))}
          </div>         
        </div>        
      </div>
      <div className="recieving-user-container">
          <button type="button" className="option" id="logout" onClick={handleLogout}>Logout</button> 
      </div> 
      </Row>

       {/* Deposit Modal */}
       <Modal show={showDepositModal} onHide={() => {setShowDepositModal(false);setAmountError('');
  setDescriptionError('');}}>       
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="depositAmount">
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)} 
              isInvalid={!!amountError}             
            />
            <Form.Control.Feedback type="invalid">
            {amountError}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="depositDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Deposit Description"
              value={depositDescription}
              onChange={(e) => setDepositDescription(e.target.value)} 
              isInvalid={!!descriptionError}             
            />
            <Form.Control.Feedback type="invalid">
            {descriptionError}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShowDepositModal(false);setAmountError('');
  setDescriptionError('');}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeposit}>
            Deposit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => {setShowPaymentModal(false);setAmountError('');
  setDescriptionError(''); }}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
          <Form.Group controlId="paymentAmount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control              
              type="number"
              placeholder="Enter payment amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              isInvalid={!!amountError}
            />
            <Form.Control.Feedback type="invalid">
            {amountError}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="paymentDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control              
              type="text"
              placeholder="Payment Description"
              value={paymentDescription}
              onChange={(e) => setPaymentDescription(e.target.value)}
              isInvalid={!!descriptionError}
            />
            <Form.Control.Feedback type="invalid">
            {descriptionError}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShowPaymentModal(false);setAmountError('');
  setDescriptionError('');}}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Make Payment
          </Button>
        </Modal.Footer>
      </Modal>
      {/* transfer Modal */}
      <Modal show={showTransferModal} onHide={() => {setShowTransferModal(false);setAmountError('');
  setDescriptionError(''); }}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
          <Form.Group controlId="transferAmount">
            <Form.Label>Transfer Amount</Form.Label>
            <Form.Control              
              type="number"
              placeholder="Enter transfer amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              isInvalid={!!amountError}
            />
            <Form.Control.Feedback type="invalid">
            {amountError}
            </Form.Control.Feedback>           
          </Form.Group>
          <Form.Group controlId="transferDescription">
            <Form.Label>To Person Name</Form.Label>
            <Form.Select value={transferName} onChange={(e) => setTransferName(e.target.value)} isInvalid={!!descriptionError}>
                    <option>Person Name</option>
                    <option value="Tan Kwei Lan">Tan Kwei Lan</option>
                    <option value="George Chong">George Chong</option>
                    <option value="Samuel Chong">Samuel Chong</option>                    
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            {descriptionError}
            </Form.Control.Feedback>            
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShowTransferModal(false);setAmountError('');}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleTransfer}>
            Transfer Payment
          </Button>
        </Modal.Footer>
      </Modal>
      
      </Col>
      <Col md={4}>
         
      </Col>
    </Row>    
    </>
  );
}

//function CardGroup({ todos }) {
//  return todos.map((todo) => {
//    return (
//      <Col md={4} key={todo.id}>
//        <TodoCard todo={todo} />
//      </Col>
//    );
//  });
//}

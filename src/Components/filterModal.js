
import React, {useState} from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Exclamation from './exclamation';
import TypeNew from './typeNew';
import TypeUsed from './typeUsed';


function FilterModal() {
    const [typeCar, setType] = useState(false); //false means used and true means new
    const [model, setModel] = useState("");
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        
    }

    function closeModal() {
        setIsOpen(false);
    }

    function TypeC() {
        const mo = document.getElementById()
        if( model === "s" && typeCar ){
            return <TypeNew />;
        }
        return <TypeUsed />

        
    }

    const handleChange = (event) => {
        setType(event.target.value)
      }

    function cancelCourse () { 
        document.getElementById("create-course-form").reset();
    }

    
   

    return (
        <div>
            <Filter onClick={openModal}>Filter</Filter>
                <Modal
                    style={customStyles}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}                    
                    contentLabel="Example Modal"
                    >
                    <ModalHeader>
                        <h1>Filters</h1>
                        <CustomClose onClick={closeModal} />
                    </ModalHeader>
                    
                    <div style={{overflowY:"scroll", height:"85%"}}>
                        <form id="create-course-form" >
                            {/*Clear All */}
                            <ClearButton onClick={cancelCourse}>Clear all</ClearButton>


                            {/*Zip code */}
                            <div style={{padding:"0px 8px 0px 20px"}}>
                                <label style={{color:"#5c5e62"}}>Delivary Zip Code&nbsp; &nbsp;</label>
                                <ErrorOutlineIcon 
                                    fontSize="small"
                                    color="#5c5e62"
                                />
                            </div>
                            <InputStyle>
                                <input type="text"  name="Delivary zip code" style={{outline: "none", borderStyle:"none", height:"30px", fontSize:"16px",color: "#171a20", backgroundColor:"#f4f4f4"}}/>
                            </InputStyle>

                            
                            {/*Search miles */}
                            <div style={{padding:"20px 8px 0px 20px"}}>
                                <label style={{color:"#5c5e62"}}>Search miles</label>
                            </div>
                            <InputStyle>
                                <select style={{ height: "30px", backgroundColor: "#f4f4f4", borderWidth:"0px", padding :"0px 40px 0px 15px", fontSize:"16px", color: "#171a20"}}>                            <option selected value="25">25 miles </option>
                                    <option value="50">50 miles</option>
                                    <option value="100">100 miles</option>
                                    <option value="200">200 miles</option>
                                </select>
                            </InputStyle>
                            
                            {/*Miles */}
                            <div style={{padding:"20px 10px 0px 20px"}}>
                                <label style={{color:"#5c5e62"}}>Models</label>
                            </div>
                            <div>
                                <Radios>
                                    <input value="ms" type="radio"  name="Models" /*onChange={setModel("s")}*/ />
                                    <label style={{padding:"0px 10px"}}>Model S</label>
                                </Radios>
                                
                                <Radios>
                                    <input value="m3" type="radio"  name="Models" />
                                    <label style={{padding:"0px 10px"}}>Model 3 </label>
                                </Radios>
                                
                                <Radios>
                                    <input value="mx" type="radio"  name="Models"/>
                                    <label style={{padding:"0px 10px"}}>Model X</label>
                                </Radios>

                                <Radios>
                                    <input value="my" type="radio"  name="Models"/>
                                    <label style={{padding:"0px 10px"}}>Model Y</label>
                                </Radios>
                            
                            
                            </div>

                            {/*Inventory type */}
                            <div style={{padding:"20px 10px 0px 20px"}}>
                                <label style={{color:"#5c5e62"}}>Inventory Type</label>
                            </div>

                            <div >
                                <Radios>
                                    <input type="radio"  name="type" value='new' /*onChange={setType(true)} checked={typeCar==="true"} onChange={handleChange}*//>
                                    <label style={{padding:"0px 10px"}}>New</label>
                                </Radios>
                                
                                <Radios>
                                    <input type="radio"  name="type" value='used' style={{cursor:"pointer"}}  /*checked={typeCar==="false"} onChange={handleChange}*//>
                                    <label style={{padding:"0px 10px"}}>Used </label>
                                </Radios>                                
                            </div>                          
                        </form>
                    </div>
                </Modal>
        </div>
  )
}
export default FilterModal;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: "20px",
    //marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: "fixed",   
    alignItems: "center",
    justifyContent: "center",
    //overflow: "auto",
    width: "86%",
    height: "88%",
    backgroundColor: "white",
    boxShadow: "#171a20",
    overflowX: "hidden",
    overflowY: "hidden",
    padding:"30px 0px 0px 20px",

  },

  overlay: {
    backdropFilter: 'blur(3px)',
    backgroundColor:'rgba(102,102,102,0.5)',
    }
}

const Filter = styled.div`
    background-color: #F4F4F4;
    height: 40px;    
    color: #171a20;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-width: Bold;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;  
    width: 300px;
    font-size: 14px;   
    font-weigth: 100;
        
    @media(min-width: 900px){
            display: none;
        }  
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: black;
  margin: 5px 10px;  
  `
 const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10x 10px 10px 10px;
    margin: 20px;
    overflow-y: hidden;
    
    
`

const InputStyle = styled.div`    
    background-color: #f4f4f4;
    align-content: center ;
    grid-area: input ; 
    justify-items: stretch; 
    display: grid;
    position: relative;
    border-radius: 20px;
    border: 1px solid;
    border-color:#a2a3a5;
    padding: 0px 20px;
    margin: 10px;
    height: 40px;
    font-size: 20px;
    color: #171a20;
    
`

const Radios = styled.div`
    font-size: 14px; 
    align-items: center;
    display: flex;
    margin: 10px;
    padding: 10px;
    
`

const ClearButton = styled.div`
    color: #8b8c8f;
    vertical-align: middle;
    background-color: white;
    padding: 4px 24px;
    border: 3px solid #8b8c8f;
    position: relative;
    border-radius: 20px;
    height: 32px;
    margin: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 24px;
    align-content: center ;
    grid-area: input ; 
    justify-items: stretch; 
    display: grid;
    position: relative;
    justify-content:center;
   
`
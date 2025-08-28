
import React, { useEffect, useState } from "react";
import {getShowById} from '../apicalls/show'
import {Card , message, Row, Col} from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { showLoading,hideLoading } from "../redux/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'

function BookingShow(){
   const {user} =  useSelector((state)=> state.User);
   const [show ,  setShow] = useState();
   const param = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();



   
   const getdata = async()=>{
          
        dispatch(showLoading());
        const response = await getShowById({showId:param.id});
        if(response.success){
            setShow(response.data);
        }
        else{
            message.error(response.message);
        }
        dispatch(hideLoading());
   }

const getSeats = ()=>{
    let columns = 12;
    let rows = Math.ceil(show.totalSeats/columns);

    return (
        <div  className="d-flex flex-column align-items-center">
            <div  className="w-100 max-width-600 mx-auto mb-25px">
                <p className="text-center mb-10px">
                       Screen this side, you will be watching in this direction
                </p>
                <div className="screen-div"></div>
            </div>

            <ul className="seat-ul justify-content-center">
                {Array.from(Array(rows).keys()).map((row)=>{
                    return Array.from(Array(columns).keys()).map((column)=>{
                        let seatNummber = row*columns + column + 1;

                    })
                })}

                
            </ul>
        </div>
    )
}

   useEffect(()=>{
       getdata();
   },[]);

    return(
        <>
           {show && (
            <Row gutter={24}>
                <Col span={24}>
                    <Card
                       title={
                         <div className="movie-title-details">
                            <h1>{show.movie.title}</h1>
                             <p>
                                Theatre: {show.theatre.name},{show.theatre.address}
                             </p>
                         </div>
                         
                       }
                        extra = {
                            <div>
                               <h3>
                                  <span>Show Name:</span> {show.name}
                               </h3>
                               <h3>
                                 <span>Date & Time :</span>
                                 {moment(show.date).format('YYYY-MM-DD')}{" "}
                                 {moment(show.time ,"HH:mm").format('hh:mm A')}
                               </h3>
                               <h3>
                                 <span>Ticket Price:</span>
                                 {show.ticketPrice}/-
                               </h3>
                               <h3>
                                 <span>Total seats:</span> {show.totalSeats}
                                 <span> &nbsp;|&nbsp; Available Seats:</span>{" "}
                                  {show.totalSeats - show.bookedSeats.length} {" "}
                               </h3>
                            </div>
                        }
                         style={{ width: "100%" }}
                    >
                       {getSeats()}
                       
                    </Card>
                </Col>
            </Row>
           )}

          
        </>
    )
}

export default BookingShow;
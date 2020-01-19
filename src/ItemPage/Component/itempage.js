import React, { Fragment } from 'react'
import './itempage.css';
import { useSelector } from 'react-redux'
import Spinner from '../../spinner'
import SideBar from '../../LandingPage/Components/Side Bar/SideBar'

const Item = props => {

    const item = useSelector(state => state.item)
    const loading = useSelector(state => state.loading)

    return (
        <Fragment>
            {loading ? <Spinner /> :
                <div className='container my-5'>
                    <div className='row'>
                        <SideBar />
                        <div className='col-lg-7'>
                            <img className='img-fluid my-4' src={item.image} alt={item.name} />
                            <div className='item-info'>
                                <h3 className='my-4'>{item.name}</h3>
                                <h4>{item.price}</h4>
                                <p>{item.description}</p>
                                <div>
                                    {item.ratings && item.ratings.map((rating, idx) => rating === true ?
                                        <i key={idx} className="fas fa-star"></i> :
                                        <i key={idx} className="far fa-star"></i>)}
                                </div>
                            </div>
                            <div className='item-buttons'>
                                <button className='btn btn-primary col-lg-3'>Add to Cart</button>
                                <button className='btn btn-primary col-lg-3' onClick={() => props.history.push('/')}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </Fragment>
    );
}

export default Item;
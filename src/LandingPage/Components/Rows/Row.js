import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import './Row.css'
import { Row1, Row2 } from '../../../data/data'
import { Link } from 'react-router-dom'
import { getItem } from '../../../Redux/Actions/item'

const RowOne = () => {

    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className='row'>
                {Row1.length > 0 && Row1.map((item, idx) =>
                    <div key={idx} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={"/item/" + item.id} onClick={() => dispatch(getItem(item.id))}>{item.name}</Link>
                                </h5>
                                <h5>{item.price}</h5>
                            </div>
                            <div className="card-footer">
                                {item.ratings.map((rating, idx) => rating === true ?
                                    <small key={idx} className="text-muted">&#9733;</small>
                                    :
                                    <small key={idx} className="text-muted">&#9734;</small>)}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='row'>
                {Row2.length > 0 && Row2.map((item, idx) =>
                    <div key={idx} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={"/item/" + item.id} onClick={() => dispatch(getItem(item.id))}>{item.name}</Link>
                                </h5>
                                <h5>{item.price}</h5>
                            </div>
                            <div className="card-footer">
                                {item.ratings.map((rating, idx) => rating === true ?
                                    <small key={idx} className="text-muted">&#9733;</small>
                                    :
                                    <small key={idx} className="text-muted">&#9734;</small>)}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </Fragment>
    );
}

export default RowOne;
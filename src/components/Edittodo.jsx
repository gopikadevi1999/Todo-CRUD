import React from 'react'

function Edittodo({ title, setTitle, description, setDescription, onClick }) {
    return <>
        <h3 className='edit'>Edit Todo</h3>
        <div className='container1'>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Todo Name" value={title} onChange={() => { setTitle(e.target.value) }} />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Todo Description" value={description} onChange={() => { setDescription(e.target.value) }} />
                </div>
                <div className="col">
                    <button type="button" className="btn btn-info" onClick={onClick} >Save Changes</button>
                </div>
            </div>
        </div>
    </>
}

export default Edittodo
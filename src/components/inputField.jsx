// import React, { PureComponent } from 'react';

import React, { memo } from 'react';

const InputField = memo((props) => {
    const inputRef = React.createRef();
    const onSubmit = event =>{
        event.preventDefault();
        console.log(inputRef.current.value);
        const name = inputRef.current.value;
        name&&props.onAdd(name);
        inputRef.current.value = '';
    }
    return (
            <form onSubmit={onSubmit} className="add-form">
            <input ref={inputRef} type="text" className='add-input' placeholder='Please enter your habit!'/>
            <input type="submit" value="Add" className='add-button'/>
            </form>
    );
}
);

// class InputField extends PureComponent {
//     inputRef = React.createRef();
//     onSubmit = event =>{
//         event.preventDefault();
//         console.log(this.inputRef.current.value);
//         const name = this.inputRef.current.value;
//         name&&this.props.onAdd(name);
//         this.inputRef.current.value = '';
//     }
//     render() {
//         console.log('input');
//         return (
//             <form onSubmit={this.onSubmit} className="add-form">
//                 <input ref={this.inputRef} type="text" className='add-input' placeholder='Please enter your habit!'/>
//                 <input type="submit" value="Add" className='add-button'/>
//              </form>
//         );
//     }
// }

export default InputField;
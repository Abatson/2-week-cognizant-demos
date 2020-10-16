import React from 'react'


export class GlobalErrorBoundary extends React.Component<any,any> {
    constructor(props){
        super(props)
        this.state = {
            error: false,
        }
    }

    componentDidCatch(error, errorInfo){
        console.log(error);
        console.log((errorInfo));
        
        
    }

    static getDerivedStateFromError(error){
        return {error:true}
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    OOps things broke
                </div>
            )
        } else {
            return this.props.children
        }
        
    }
}
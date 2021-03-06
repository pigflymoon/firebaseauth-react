import React, {Component} from 'react';
import withAuthorization from './withAuthorization';
import {db} from '../firebase';


class PaidImagesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: null,
            error: false,
        };
    }

    componentDidMount() {
        var self = this;
        db.onceGetPaidImages().then(snapshot => {
            if (snapshot) {
                console.log('snapshot', snapshot.val());
                this.setState(() => ({images: snapshot.val()}));
            }

        }, function (error) {
            self.setState({error: true});
            // console.error('get images erros,', error);

        });


    }

    render() {
        const {images, error} = this.state;

        return (
            <div>
                {error ?
                    <h1>404</h1>
                    : <div>
                        <h1>Paid images list</h1>
                        <p>This Page is accessible by paid-user signed in user.</p>
                        <p>Images :</p>
                        {!!images && <ImagesList images={images}/>}

                    </div> }
            </div>
        );
    }
}


const ImagesList = ({images}) => {
        if (images) {
        return (
            <div>
                <h2>List of Usernames of Users</h2>
                <p>(Save on Sign up in Firebase Database)</p>

                {Object.keys(images).map(key =>
                    <div key={key}>

                        <ul>
                            <li><img src={images[key].downloadUrl} alt={images[key].Name} width="50"/></li>

                        </ul>

                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div><h2>NO IMAGES</h2></div>
        )
    }

}


const authCondition = (authUser) => {

    return (!!authUser)
};

export default withAuthorization(authCondition)(PaidImagesPage);

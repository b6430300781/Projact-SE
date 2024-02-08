import "./UserBoxNameEduca.css";
import Pop from './Pop';

export default function UserBoxNameEduca(props) {
    return (
        <div>
            <div className="UserBoxNameEduca-userbox">
                {props.children}
                <div>
                    <div className="UserBoxNameEduca-buttonadd">
                        <Pop></Pop>

                    </div>
                    <body className="UserBoxNameEduca-NameEduca">
                        <p>สมรัก  ใจดี</p>
                    </body>

                </div>



            </div>

        </div>

    );
}


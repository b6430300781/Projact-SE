import "./UserBoxNameEduca.css";
import Pop1 from './Pop1';
import UserList from './get1';

export default function UserBoxNameEduca(props) {
    return (
        <div>
            <div className="UserBoxNameEduca-userbox">
                {props.children}
                <div>
                    <div className="UserBoxNameEduca-buttonadd">
                        <Pop1></Pop1>

                    </div>
                    <body className="UserBoxNameEduca-NameEduca">
                    <UserList></UserList>
                    </body>

                </div>



            </div>

        </div>

    );
}


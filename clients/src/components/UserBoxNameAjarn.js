import "./UserBoxNameAjarn.css";
import Pop from './Pop';

export default function UserBoxNameAjarn(props) {
    return (
        <div>
            <div className="UserBoxNameAjarn-userbox">
                {props.children}
                
                <div className="UserBoxNameAjarn-buttonadd">
                        <Pop></Pop>

                    </div>
                <div>
                    <body className="UserBoxNameAjarn-NameAjarn">
                        <p>สมเกียรติ  ใจดี</p>
                    </body>


                </div>



            </div>

        </div>

    );
}
import * as React from 'react';


const Login: React.FC<LoginProps> = () => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-10">
                    {/* <h2 className="display-1 text-center text-primary">Login Page</h2> */}
                    {/* <img src={Logo} alt="logo"></img> */}
                    {/* <img alt="timer" src={require('./images/timer.png')} /> */}
                    {/* <img
                        src={require('./logo.jpg')}
                        alt="logo"
                    /> */}

                    <img src="/me.png" alt="logo" width = "100" />
                </div>
            </section>

        </main>
    );
}

interface LoginProps { }

export default Login;
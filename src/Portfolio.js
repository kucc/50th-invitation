import React from 'react'
import "./Portfolio.css";
// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
    return (
        <div className={`menu-container ${props.showMenu}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={props.toggleMenu}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={props.toggleMenu}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={props.toggleMenu}>
                            EVENT
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={props.toggleMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <p className="brand">
                        <strong>KUCC 50주년 기념식</strong>
                    </p>
                    <a
                        onClick={props.toggleMenu}
                        className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                    >
                        <span />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
    return (
        <header id="welcome-section">
            <div className="forest" />
            <div className="silhouette" />
            <div className="moon" />
            <div className="container">
                <h1>
                    <span className="line">KUCC</span>
                    <span className="line"><span className='color'>50주년</span> 기념행사에</span>
                    <span className="line">초대합니다.</span>
                </h1>
                <div className="buttons">
                    <a href="#projects">about event</a>
                    <a href="#contact" className="cta">
                        get in touch
                    </a>
                </div>
            </div>
        </header>
    );
};


/***********************
  About Component
 ***********************/

const About = props => {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's KUCC?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">
                            Korea University Computer Club
                        </h4>
                        <p>
                            KUCC는 1973년 전산고우회로 시작하여 컴퓨터를 사랑하고, 다른 이들과 소통하고 싶은 사람들이 모인 고려대학교 중앙 컴퓨터 동아리입니다.
                        </p>
                        <p>
                            컴퓨터 과학 분야의 관심을 가진 학생들이 모여 다양한 활동을 진행하며, 기술과 지식을 교류하고 발전시키는 장을 제공합니다. 컴퓨터 프로그래밍, 알고리즘, 웹 개발, 데이터 분석, 인공지능 등의 주제에 관심을 가지고 있는 학생들이 함께 모여 다양한 프로젝트를 수행하고 학습을 진행합니다.
                            회원들이 서로에게 지식과 경험을 나누고, 성장하며 협력하는 컴퓨터 동아리로, 학부생들이 컴퓨터 과학 분야에서 더 나은 역할을 할 수 있도록 도와주는 활발하고 열린 커뮤니티를 형성하고 있습니다.
                        </p>
                    </div>
                    <div className="title">
                        <h3>What does we do?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Computer</h4>
                        <p>
                            KUCC는 세션과 스터디를 통해 멤버들 간의 지식 공유와 협력을 도모하며, 세미나, 아이디어톤, 해커톤, 게임잼, 코드리뷰 등의 다양한 활동을 진행합니다.
                        </p>
                        <p>
                            또한, 외부 연사 초청 강연, 선배와의 만남, 기업 탐방 등의 프로그램도 제공하여 동아리원들의 컴퓨터 과학 관련 역량을 향상시키고 성장할 수 있는 기회를 제공합니다.
                        </p>
                        <p>
                            마지막으로 도서 대여 서비스를 통해 동아리원의 독서 문화와 학습 능력을 장려합니다. 다양한 분야의 도서를 보유하고 있으며, 회원들은 이를 대여하여 자신의 관심사에 맞는 책을 읽을 수 있고, 매달 한 권씩 도서를 신청할 수 있습니다.
                        </p>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Communicate</h4>
                        <p>
                            저희 동아리는 멤버들 간의 친목을 도모하기 위해 다양한 행사를 진행하고 있습니다. 개강파티, 종강파티, 입실렌티/고연전 뒷풀이, MT, LT와 같은 단체 행사와 더불어, 친목조와 소모임을 운영합니다.
                        </p>
                        <p>
                            친목조와 소모임은는 공통의 관심사나 취미를 가진 멤버들이 모여 활동하는 그룹으로, 서로의 취미나 관심사를 공유하고 함께 활동하며 친밀도를 형성합니다.
                        </p>
                        <p>
                            또한, 연세대학교 중앙컴퓨터동아리 YCC와의 연합 교류 생일파티를 개최합니다. 이 행사는 YCC와 함께 매달 생일을 축하하며 서로의 동아리 문화를 공유하고 교류하는 자리로,  네트워킹 기회를 외부로 확장하며 친밀도를 형성합니다.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};


/***********************
  Project Component
 ***********************/

const Project = props => {
    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'far fa-chart-bar',
        node: 'fab fa-node'
    };

    const link = props.link || 'http://';
    const repo = props.repo || 'http://';

    return (
        <div className="project">
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
            </a>
            <div className="project-details">
                <div className="project-tile">
                    <p className="icons">
                        {props.tech.split(' ').map(t => (
                            <i className={tech[t]} key={t} />
                        ))}
                    </p>
                    {props.title}{' '}
                </div>
                {props.children}
                <div className="buttons">
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        View source <i className="fas fa-external-link-alt" />
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Try it Live <i className="fas fa-external-link-alt" />
                    </a>
                </div>
            </div>
        </div>
    );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="heading">
                    <h3 className="title">Ceremony</h3>
                    <p className="separator" />
                    <p className="subtitle">
                        이 기념 행사는 우리의 훌륭한 여정을 회고하고 성취를 축하하는 의미 있는 자리로, 특별한 손님들의 연설과 졸업생, 현 동아리원들의 이야기가 전해질 예정입니다. KUCC가 컴퓨터 과학 분야와 동아리원들의 삶에 미치는 영향력을 함께 나누는 시간이 될 것입니다.
                    </p>
                </div>
                <div className="projects-wrapper">
                    <Project
                        title="Anonymous Message Board."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg'}
                        tech="js css react node"
                        link="https://yagoestevez-anon-msg-board.glitch.me/"
                        repo="https://github.com/yagoestevez/anonymous-message-board"
                    >
                        <small>
                            Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
                        </small>
                        <p>
                            This is a full-stack website that I made which lets the users read and post anonymous
                            messages and replies.
                        </p>
                    </Project>
                    <Project
                        title="Stock Price Checker."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg'}
                        tech="js node css"
                        link="https://yagoestevez-stock-price-checker.glitch.me/"
                        repo="https://github.com/yagoestevez/fcc-stock-price-checker"
                    >
                        <small>
                            Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug.
                        </small>
                        <p>
                            Another full-stack website to check the current value of any requested stock in the
                            market.
                        </p>
                    </Project>
                    <Project
                        title="Personal Library."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg'}
                        tech="js node css"
                        link="https://yagoestevez-personal-library.glitch.me/"
                        repo="https://github.com/yagoestevez/fcc-personal-library"
                    >
                        <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug.</small>
                        <p>
                            A full-stack website to store book titles and comments to each book into a remote
                            database.
                        </p>
                    </Project>
                    <Project
                        title="Issue Tracker."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg'}
                        tech="js node css"
                        link="https://yagoestevez-issue-tracker.glitch.me/"
                        repo="https://github.com/yagoestevez/fcc-issue-tracker"
                    >
                        <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug.</small>
                        <p>Yet another full-stack app to save and manage technical issues to be fixed.</p>
                    </Project>
                    <Project
                        title="Metric-Imperial Converter."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg'}
                        tech="js node css"
                        link="https://yagoestevez-metric-imperial-converter.glitch.me/"
                        repo="https://github.com/yagoestevez/fcc-metric-imperial-converter/"
                    >
                        <small>Built using Node, Express, JS + jQuery, CSS + Bootstrap and Pug.</small>
                        <p>
                            Another full-stack for converting values from the Internation System of Units (Metric)
                            into the imperial units.
                        </p>
                    </Project>
                    <Project
                        title="URL Shortener Microservice."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg'}
                        tech="js node css"
                        link="https://cortala.glitch.me/example"
                        repo="https://github.com/yagoestevez/cortala"
                    >
                        <small>Built using Node, Express, CSS + Bootstrap and Pug.</small>
                        <p>
                            A microservice which takes a raw URL and makes it a short link to make it easy to sent
                            it through the Internet.
                        </p>
                    </Project>
                    <Project
                        title="Exercise Tracker."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg'}
                        tech="js vue node css"
                        link="https://yagoestevez-exercise-tracker.glitch.me"
                        repo="https://github.com/yagoestevez/exercise-tracker"
                    >
                        <small>Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap.</small>
                        <p>
                            A service which lets the users save their daily exercise (or anything) into a log for
                            them to check it later.
                        </p>
                    </Project>
                    <Project
                        title="Bar Chart."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/BarChart.jpg'}
                        tech="js d3 css"
                        link="https://codepen.io/yagoestevez/full/wxjmrB/"
                        repo="https://github.com/yagoestevez/fcc-barchart"
                    >
                        <small>Built using CSS, JS and D3.js.</small>
                        <p>A bar chart representing the evolution of the US GDP.</p>
                    </Project>
                    <Project
                        title="Treemap Diagram."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TreemapDiagram.jpg'}
                        tech="js d3 css"
                        link="https://codepen.io/yagoestevez/full/bjZygz/"
                        repo="https://github.com/yagoestevez/fcc-treemap-diagram"
                    >
                        <small>Built using CSS, JS and D3.js.</small>
                        <p>
                            A treemap diagram representing groups of pledges and sales from a particular category.
                        </p>
                    </Project>
                    <Project
                        title="Choropleth Map."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg'}
                        tech="js d3 css"
                        link="https://codepen.io/yagoestevez/full/NBeaWK/"
                        repo="https://github.com/yagoestevez/fcc-choropleth-map"
                    >
                        <small>Built using CSS, JS and D3.js.</small>
                        <p>A choropleth map representing the educational attainment by county in the U.S.</p>
                    </Project>
                    <Project
                        title="Random Quoting Machine."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg'}
                        tech="js vue css"
                        link="https://codepen.io/yagoestevez/full/bxgEyd/"
                        repo="https://github.com/yagoestevez/random-quoting-machine"
                    >
                        <small>Built using VueJS, Axios and CSS + Bootstrap.</small>
                        <p>A random quoting app which retrieves pictures and quotes from two different APIs.</p>
                    </Project>
                    <Project
                        title="Calculator."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg'}
                        tech="js react css"
                        link="https://codepen.io/yagoestevez/full/ERVONM/"
                        repo="https://github.com/yagoestevez/the-calcoolator"
                    >
                        <small>Built using React and CSS.</small>
                        <p>A project on which I built a virtual calculator with its usual features.</p>
                    </Project>
                    <Project
                        title="Pomodoro Timer."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg'}
                        tech="js react css"
                        link="https://codepen.io/yagoestevez/full/dqJGVa"
                        repo="https://github.com/yagoestevez/tomate-time"
                    >
                        <small>Built using React, CSS and lots of SVG.</small>
                        <p>A cute and animated Pomodoro clock to help the users improve their productivity.</p>
                    </Project>
                    <Project
                        title="TicTacToe Game."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg'}
                        tech="js react css"
                        link="https://codepen.io/yagoestevez/full/KRevzB/"
                        repo="https://github.com/yagoestevez/TicTacToe"
                    >
                        <small>Built using React, CSS and SVG.</small>
                        <p>
                            A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on
                            FreeCodeCamp.
                        </p>
                    </Project>
                    <Project
                        title="Twitch Clone."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg'}
                        tech="js vue sass"
                        link="https://codepen.io/yagoestevez/full/xjwVPq/"
                    >
                        {/* repo="https://github.com/yagoestevez/TicTacToe"> */}
                        <small>Built using VueJS, Axios and Scss.</small>
                        <p>
                            Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end
                            projects on FreeCodeCamp.
                        </p>
                    </Project>
                    <Project
                        title="Weather App."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg'}
                        tech="js vue css"
                        link="https://codepen.io/yagoestevez/full/zWbGmZ/"
                    >
                        {/* repo="https://github.com/yagoestevez/TicTacToe"> */}
                        <small>Built using VueJS, Axios and CSS.</small>
                        <p>App that present the users with the current local weather for their location.</p>
                    </Project>
                    <Project
                        title="Tribute."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg'}
                        tech="js sass"
                        link="https://codepen.io/yagoestevez/full/aaaOxL/"
                        repo="https://github.com/yagoestevez/tribute-to-aaron-swartz"
                    >
                        <small>Built using vanilla Javascript and Scss.</small>
                        <p>
                            Tribute page to Aaron Swartz, a static website built with SCSS and plain Javascript.
                        </p>
                    </Project>
                    <Project
                        title="Survey Form."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/SurveyForm.jpg'}
                        tech="js sass"
                        link="https://codepen.io/yagoestevez/full/bjVgjX/"
                        repo="https://github.com/yagoestevez/membership-form"
                    >
                        <small>Built using vanilla Javascript and Scss.</small>
                        <p>An animated survey form.</p>
                    </Project>
                    <Project
                        title="Landing Page Example."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg'}
                        tech="js sass"
                        link="https://codepen.io/yagoestevez/full/pOBLeK/"
                        repo="https://github.com/yagoestevez/tomate-timer-landing-page"
                    >
                        <small>Built using vanilla Javascript and Scss.</small>
                        <p>A landing page for the Pomodoro Timer I made (shown previously in this section).</p>
                    </Project>
                    <Project
                        title="Technical Documentation Page."
                        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg'}
                        tech="js react css"
                        link="https://codepen.io/yagoestevez/full/QxOLKX/"
                        repo="https://github.com/yagoestevez/documentify"
                    >
                        <small>Built using React and CSS.</small>
                        <p>
                            A technical documentation page made for a little React library I published on NPM.
                        </p>
                    </Project>
                </div>
            </div>
        </section>
    );
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
    return (
        <section id="contact">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading">
                        <p className="title">
                            Want to <br />
                            contact us?
                        </p>
                        <p className="separator" />
                        <p className="subtitle">
                            원활한 인원조사를 위해 아래의 폼을 꼭 작성부탁드립니다.
                        </p>
                    </div>
                </div>
                <form id="contact-form" action="#">
                    <input placeholder="Name" name="name" type="text" required />
                    <input placeholder="Class of" name="number" type="text" required />
                    <input placeholder="Phone" name="phone" type="text" required />
                    <textarea placeholder="Message" type="text" name="message" />
                    <input className="button" id="submit" value="Submit" type="submit" />
                </form>
            </div>
        </section>
    );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
    return (
        <footer>
            <div className="wrapper">
                <h3>
                    50주년 기념 행사에서 함께하는 기쁨을 나누고 평생 간직할 추억을 만들기 위해 노력하겠습니다.
                    <br />
                    감사합니다. KUCC 창립 50주년 기념식에서 여러분을 만나기를 기대합니다.
                </h3>
                <p>© {new Date().getFullYear()} KUCC_CHERRY.</p>
            </div>
        </footer>
    );
};


/***********************
  Main Component
 ***********************/

class App extends React.Component {
    state = {
        menuState: false
    };

    toggleMenu = () => {
        this.setState(state => ({
            menuState: !state.menuState
                ? 'active'
                : state.menuState === 'deactive'
                    ? 'active'
                    : 'deactive'
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Header />
                <About />
                <Projects />
                <Contact />
                <div className='blank' />
                <Footer />
            </React.Fragment>
        );
    }

    componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;

        window.onscroll = () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }

            if (scrollPos - 100 <= window.innerHeight)
                header.style.visibility = header.style.visibility === 'hidden' && 'visible';
            else header.style.visibility = 'hidden';

            if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
            else navbar.classList.remove('bg-active');
        };

        (function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            for (let i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener('click', e => {
                        e.preventDefault();
                        document.querySelector(internalLinks[i].hash).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                    });
                }
            }
        })();
    }
}


export default App;
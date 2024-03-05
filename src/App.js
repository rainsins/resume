import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import config from './config.json';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  useEffect(()=>{
    console.log(config);
  },[]);

  const project_item = config.project.map((el,index)=>{
    const dec_item = el.dec.map((e,i)=>{
      return(
        <div className='dec-item' key={i}>
          {e}
        </div>
      );
    });
    return(
      <div className='edu-box' key={index}>
      <div className='school-info-title'>
        <div className='school-name'>
          {el.name}
        </div>
        <div className='school-time'>
          {`${el.start_date} - ${el.end_date}`}
        </div>
      </div>
      <div className='school-info-porf'>
        <span>技术栈：</span>{el.tech_stack}
      </div>
      <div className='school-info-dec'>
        {dec_item}
      </div>
    </div>);
  });

  const edu_item = config.edu.map((el,index)=>{
    return(
      <div className='edu-box' key={index}>
        <div className='school-info-title'>
          <div className='school-name'>
            {el.school}
          </div>
          <div className='school-time'>
            {`${el.start_date} - ${el.end_date}`}
          </div>
        </div>
        <div className='school-info-porf'>
          {el.prof}专业
        </div>
        <div className='school-info-dec'>
          {el.experience}
        </div>
      </div>
    );
  })

  const grade_item = config.grades.map((el,index)=>{
    return(
      <div className='resume-grade-item-box' key={index}>
        <div className='resume-grade-item-class'>{el.class}</div>
        <div className='resume-grade-item-grade'>{el.grade}</div>
      </div>
    );
  });

  const skill_item = config.skill.map((el, index)=>{
    const style_bg = {
      width: `${el.proficiency}%`
    };
    return(
      <div className='resume-skill-item' key={index}>
        <img src={`./img/icon/${el.icon}.svg`}></img>
        <span className='resume-skill-title'>
          {el.name}
        </span>
        <span className='resume-skill-bra'>
          <span className='resume-skill-bra-in' style={style_bg}></span>
        </span>
      </div>
    );
  });

  const hobby_item = config.hobby.map((el,index)=>{
    return(
      <div className='hobby-item'>
        <img src={`./img/aihao/${el.name}.svg`} alt={el.name} />
      </div>
    );
  });

  const ui_style = {
    marginBottom: "24px"
  }

  const ui_item = config.prize.map((el,index) => {
    return(
      <div className={`ui-item ${index == (config.prize.length - 1) ? "ui-last-box" : ""}`} >
        {el}
      </div>
    );
  })

  return (
    <>
    <div className="App" id='resume-print-box'>
      <div className='resume-box'>
        <div className='resume-content-box'>
          <div className='resume-content-div-info-box'>
            <div className='resume-content-div-info-name'>
              <div className='resume-content-div-info-name-da'>
                {config.name}
              </div>
              <div className='resume-content-div-info-name-sub'>
                {config.subname}
              </div>
            </div>
            <div className='resume-content-div-info-dec'>
              
              <svg t="1708867258656" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13795" width="16" height="16"><path d="M398.652952 165.692952c-32.280381-46.006857-58.172952-61.318095-92.867047-54.808381-14.969905 2.80381-24.210286 7.850667-41.20381 22.528l-12.946285 11.361524-25.185524 20.894476-6.582857 5.753905c-3.705905 3.413333-6.38781 6.217143-9.825524 10.118095-64 72.46019-81.724952 185.782857-44.470857 292.327619 26.794667 76.55619 74.605714 152.624762 142.774857 228.644572 72.289524 80.62781 133.046857 131.364571 202.922666 168.374857 54.857143 29.013333 96.865524 41.74019 145.676191 43.227429 59.001905 1.828571 110.957714-11.50781 153.648762-39.15581a162.133333 162.133333 0 0 0 19.553524-15.189333l8.289523-7.558095 16.335239-15.213715 5.534476-4.924952 10.922666-9.435429c22.040381-19.651048 29.184-31.939048 30.646858-51.370666 2.194286-29.647238-11.215238-52.736-49.737143-85.699048l-26.063238-21.820952-12.117334-10.581334-11.459047-9.825524c-37.229714-30.744381-64.804571-40.69181-100.205715-35.35238-24.283429 3.632762-38.278095 12.141714-63.073523 38.107428l-10.947048 11.654095c-18.041905 19.017143-28.330667 26.258286-43.544381 29.305905-22.25981 4.461714-44.373333-7.046095-80.262095-36.205714-46.250667-37.546667-84.626286-80.676571-117.613715-131.949714-22.869333-35.766857-31.890286-62.902857-24.941714-87.600762 2.82819-9.99619 9.679238-17.042286 24.064-28.184381l14.994286-11.312762 2.413714-1.877334 22.747429-18.553904c20.114286-16.822857 28.281905-28.281905 32.572952-45.836191 8.899048-36.10819 0.487619-66.072381-32.426667-117.638095l-15.62819-24.234667-5.558857-8.533333-6.436572-9.435429z" p-id="13796"></path></svg>
              电话：{config.phone}
              
              <svg t="1708869267686" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23480" width="16" height="16"><path d="M853.333333 170.666667 170.666667 170.666667C123.733333 170.666667 85.333333 209.066667 85.333333 256l0 512c0 46.933333 38.4 85.333333 85.333333 85.333333l682.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L938.666667 256C938.666667 209.066667 900.266667 170.666667 853.333333 170.666667zM853.333333 341.333333l-341.333333 213.333333L170.666667 341.333333 170.666667 256l341.333333 213.333333 341.333333-213.333333L853.333333 341.333333z" p-id="23481"></path></svg>
              邮箱：{config.mail}
              
              <svg t="1708868728268" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20414" width="16" height="16"><path d="M501.76 30.72C337.92 30.72 204.8 163.84 204.8 330.24c0 163.84 161.28 371.2 299.52 540.16 135.68-171.52 299.52-373.76 299.52-540.16-2.56-166.4-135.68-299.52-302.08-299.52z m0 496.64c-110.08 0-197.12-89.6-197.12-197.12 0-110.08 89.6-197.12 197.12-197.12 110.08 0 197.12 89.6 197.12 197.12 2.56 110.08-87.04 197.12-197.12 197.12z m0 0" fill="" p-id="20415"></path><path d="M389.12 330.24c0 30.72 12.8 58.88 33.28 79.36 20.48 20.48 51.2 33.28 79.36 33.28 30.72 0 58.88-12.8 79.36-33.28 20.48-20.48 33.28-51.2 33.28-79.36 0-30.72-12.8-58.88-33.28-79.36-20.48-20.48-51.2-33.28-79.36-33.28-30.72 0-58.88 12.8-79.36 33.28-20.48 20.48-33.28 48.64-33.28 79.36z m0 0" fill="" p-id="20416"></path><path d="M504.32 1000.96c-192 0-386.56-61.44-386.56-176.64 0-64 64-117.76 176.64-151.04 20.48-5.12 40.96 5.12 46.08 25.6 5.12 20.48-5.12 40.96-25.6 46.08-84.48 23.04-122.88 56.32-122.88 79.36 0 40.96 122.88 102.4 314.88 102.4 192 0 314.88-61.44 314.88-102.4 0-23.04-46.08-58.88-130.56-81.92-20.48-5.12-30.72-25.6-25.6-46.08 5.12-20.48 25.6-30.72 46.08-25.6 117.76 30.72 186.88 87.04 186.88 153.6-7.68 115.2-202.24 176.64-394.24 176.64z m0 0" fill="" p-id="20417"></path></svg>
              地址：{config.addr}
              
              <svg t="1708868793557" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22413" width="16" height="16"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m-147.911111 813.511111l-71.111111-17.066667 2.844444-14.222222c25.6-99.555556 76.8-187.733333 147.911111-258.844444-22.755556-36.977778-19.911111-85.333333 8.533334-119.466667 34.133333-36.977778 88.177778-45.511111 130.844444-17.066667 42.666667 28.444444 56.888889 82.488889 34.133333 128-19.911111 42.666667-68.266667 62.577778-113.777777 54.044445-68.266667 62.577778-116.622222 142.222222-139.377778 233.244444v11.377778zM768 605.866667c-48.355556 85.333333-139.377778 136.533333-236.088889 136.533333-14.222222 0-28.444444 0-45.511111-2.844444l-14.222222-2.844445 11.377778-71.111111 14.222222 2.844444c85.333333 14.222222 170.666667-28.444444 210.488889-105.244444 39.822222-76.8 25.6-170.666667-36.977778-230.4-65.422222-65.422222-170.666667-76.8-250.311111-25.6-79.644444 51.2-110.933333 153.6-73.955556 241.777778l5.688889 14.222222-68.266667 28.444444-5.688888-14.222222c-14.222222-31.288889-19.911111-68.266667-19.911112-102.4 0-113.777778 71.111111-216.177778 179.2-256 108.088889-39.822222 227.555556-8.533333 301.511112 79.644445 73.955556 82.488889 85.333333 207.644444 28.444444 307.2z" fill="#5A5A5A" p-id="22414"></path></svg>
              博客：{config.blog}
            </div>
          </div>
          <div className='resume-content-dev-info-box'>
            <div className='resume-content-dev-info-left-box'>
              <div className='app-title'>
                报考信息
              </div>
              <div className='app-info'>
                报考专业：{config.appprof}
              </div>
              <div className='app-grade-box'>
                {grade_item}
                
              </div>
              <div className='hr'></div>
              <div className='app-title'>
                教育背景
              </div>
              {edu_item}
              <div className='hr'></div>
              <div className='app-title'>
                项目经历
              </div>
              {project_item}
            </div>
            <div className='resume-content-dev-info-right-box'>
              <div className='app-title'>
                技能
              </div>
              <div className='resume-skill-box'>
                {skill_item}
              </div>
              <div className='hr'></div>
              <div className='app-title'>
                所获奖项
              </div>
              {ui_item}
              <div className='hr'></div>
              <div className='app-title'>
                个人评价
              </div>
              <div className='school-info-dec'>
                {config.profile}
              </div>
            </div>
          </div>
          <div className='bottom-profile'>
            <div className='app-title'>
              爱好
            </div>
            <div className='hobby-box'>
              {hobby_item}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;

const Notification = (props) => {
    const { containerName, iconUrl, message } = props;
    const containerClassName = `notification-container ${containerName}`;
    return (
      <div className={containerClassName}>
        <img className="icon" src={iconUrl} />
        <p className="message">{message}</p>
      </div>
    );
  };
  
  const element = (
    //  Write your code here.
    <div className="main-container">
      <h1 className="heading">Notifications</h1>
      <div className="notifications-list-container">
        <Notification
          containerName="primary-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message="Information Message"
        />
        <Notification
          containerName="success-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          message="Success Message"
        />
        <Notification
          containerName="warning-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          message="Warning Message"
        />
        <Notification
          containerName="danger-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          message="Error Message"
        />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  
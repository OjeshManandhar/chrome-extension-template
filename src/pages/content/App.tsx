import { useState } from 'react';
import { Button, Drawer, Space, notification } from 'antd';

function App() {
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      {contextHolder}
      <h1>Popup</h1>

      <Space direction='vertical' size='middle'>
        <Button type='primary' onClick={showDrawer}>
          Open Drawer
        </Button>

        <Button type='primary' onClick={openNotification}>
          Open the notification box
        </Button>
      </Space>

      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default App;

import { Form, Modal } from 'antd';
import { useState } from 'react';
import telephone from '../../assets/images/telephone-612061.jpg';
import { Send } from 'lucide-react';

const ContactModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="cursor-pointer hover:opacity-80 flex gap-1 items-center"
      >
        <p>Contact Us</p>
        <Send size={24} />
      </button>
      <Modal
        title={
          <span
            style={{
              fontSize: '24px',
              color: '#015FF1',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Contact Us
          </span>
        }
        centered
        open={modalOpen}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={() => setModalOpen(false)}
        okType="primary"
        okText="Send"
        width={700}
        okButtonProps={{
          style: {
            backgroundColor: '#015FF1',
            color: '#FFFFFF',
          },
        }}
      >
        <div className="grid border-t border-t-black rounded-tr-lg  gap-5 md:grid-cols-2">
          <Form className="flex flex-col gap-5 p-2">
            <p>
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>
            <input
              className="focus:outline-0 border-b-2 py-1 px-2"
              required
              placeholder="Full Name"
            />
            <input
              className="focus:outline-0 border-b-2 py-1 px-2"
              required
              type="email"
              placeholder="Email Address"
            />
            <textarea
              className="focus:outline-0 border-b-2 py-1 px-2"
              required
              placeholder="Message..."
            />
          </Form>
          <div>
            <img
              className="h-full rounded-lg"
              src={telephone}
              alt="Contact us"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;

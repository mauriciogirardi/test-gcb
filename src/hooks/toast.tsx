import ToastContainer from 'components/ToastContainer';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

interface ToastContextProps {
  addToast(msg: Omit<ToastMsgProps, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMsgProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMsgProps[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMsgProps, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(prevState => [...prevState, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevState => prevState.filter(msg => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
}

type ModalWindowProps = {
  modalState: string,
  setModalState: React.Dispatch<React.SetStateAction<string>>,
}

export default function ViewModal( { modalState, setModalState }: ModalWindowProps) {
  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-65 z-20" onClick={() => setModalState("")}>
      <div className="w-full h-full py-10 lg:p-20">
        <iframe         
          className="w-full h-full"
          allow="autoplay"
          src={modalState}
        >
        </iframe>
      </div>
    </div>
  )
}

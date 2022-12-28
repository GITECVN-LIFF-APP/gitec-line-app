

export type HistoryProps = {
  title: string
  content: string  
}

const HistoryInformation = ({title, content}:HistoryProps) => {
  return (
    <>
      <div className='container'>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </>
  )
}
export default HistoryInformation

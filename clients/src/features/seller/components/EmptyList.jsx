import { faBoxArchive } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function EmptyList() {
  return (
    <div className="py-20 text-center">
      <FontAwesomeIcon icon={faBoxArchive} className="mb-4" size='4x' />
      <p className="text-gray-400 text-xl">
        Không tìm thấy sản phẩm
      </p>
    </div>
  )
}

export default EmptyList
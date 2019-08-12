import '../Body.css';
import React,{ Component} from 'react';
import Lesson from './Lesson';
// import Couse from './components/Couse'
class BodyLeft extends Component{
    render(){
        return(
           <div className="sub-container col-description"> 
                <div className="description-title">
                    <h3>Hệ thống học tập trực tuyến</h3>
                </div>
                <div>
                    <span className="description-sub-title">
                        Hệ thống phục vụ cho phát triển kỹ năng cá nhân - phát triển sức mạnh doanh nghiệp </span>
                    <ul>
                        <Lesson icon="book" name1="Học liệu đa dạng" name2="Học liệu xây dựng đa dạng về thể loại và lĩnh vực"></Lesson>
                        <Lesson icon="videocam" name1="Lớp học trực tuyến" name2="Đặt lịch và thảo luận trực tuyến với giáo viên nhanh chóng"></Lesson>
                        <Lesson icon="playlist_add_check" name1="Kiểm tra đánh giá năng lực" name2="Bài kiểm tra trắc nghiệm đánh giá khách quan"></Lesson>
                    </ul>
                </div>
            </div>
        )
    }

}
export default BodyLeft
import React from "react";
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./about.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from "../../components/NavbarWibu";
import FooterWibu from "../../components/FooterWibu";
function AboutPage() {
  return (
    <>
      <NavbarWibu />
      <div className="jumbotron text-center">
        <h1>eTorrent</h1>
        <p>Torrent công nghệ đến từ tương lai</p>
      </div>
      <div id="about" className="pag">
        <div className="row">
          <div className="col-sm-8">
            <h2>eTorrent</h2>
            <br />
            <h4>Khám Phá Thế Giới Torrent Mới</h4>
            <p>
              Chào mừng bạn đến với eTorrent - nơi tận hưởng thế giới đầy màu sắc của torrent một cách đơn giản và thuận tiện nhất! eTorrent là một nền tảng hoàn toàn mới, được xây dựng với mục tiêu mang lại trải nghiệm tải torrent tốt nhất cho mọi người, với sự đa dạng, an toàn và dễ sử dụng.Với eTorrent, bạn có thể dễ dàng tìm kiếm và tải xuống hàng triệu tập tin torrent từ nhiều lĩnh vực khác nhau như phim, nhạc, sách, trò chơi và phần mềm. Từ những bộ phim bom tấn đang hot nhất đến những album nhạc mới nhất của nghệ sĩ yêu thích, tất cả đều có mặt trên eTorrent, chờ đợi bạn khám phá.
              Với giao diện đơn giản và dễ sử dụng, eTorrent mang lại trải nghiệm tìm kiếm và tải torrent một cách nhanh chóng và thuận tiện. Bạn có thể tìm kiếm theo tên tập tin, danh mục, hoặc sự phổ biến, giúp bạn dễ dàng tìm thấy những gì bạn đang tìm kiếm. Hơn nữa, eTorrent cung cấp các tính năng lọc và sắp xếp linh hoạt để bạn có thể tìm kiếm chính xác theo yêu cầu của mình.
              Chúng tôi hiểu rằng an ninh và bảo mật là vấn đề quan trọng đối với người dùng torrent, và vì vậy, eTorrent cam kết bảo vệ thông tin cá nhân của bạn và cung cấp các tập tin torrent an toàn. Tất cả các tập tin được kiểm tra và xác minh để đảm bảo tính nguyên vẹn và an toàn cho người dùng.
            </p>
            <br />
            <p>
              Ngoài ra, eTorrent cũng hỗ trợ cộng đồng người dùng trong việc chia sẻ và tải lên các tập tin torrent. Bằng cách tham gia vào cộng đồng, bạn có thể chia sẻ tập tin của mình và khám phá các tập tin mới từ người dùng khác, tạo ra một không gian mở và phong phú cho việc chia sẻ nội dung.
              eTorrent không chỉ là nơi tải torrent, mà còn là cộng đồng đam mê, nơi bạn có thể khám phá, chia sẻ và kết nối với những người cùng sở thích. Hãy đồng hành cùng chúng tôi trên hành trình khám phá thế giới torrent mới, với eTorrent - nền tảng torrent hoàn hảo cho mọi người!
            </p>
            <br />
            <h4>Khám phá!</h4>
            <p>
              Sử dụng thanh tìm kiếm để khám phá ý tưởng, con người và xu hướng theo từ khóa. Khám phá các chủ đề được đề xuất hoặc tìm kiếm chủ đề của riêng bạn.  </p>
            <br />
            <h4>Thể hiện quan điểm cá nhân!!!</h4>
            <p>
              Dưới mỗi file sẽ có biểu tượng “Thích” để bạn có thể bày tỏ cảm xúc của mình với bức ảnh một cách trực tiếp nhất. "Ngôi sao" một biểu tượng hình ngôi sao xinh xắn dùng để lưu lại những bức ảnh "ngôi sao" trong mắt bạn. Chia sẻ những bức ảnh bạn thích với liên kết. “Báo cáo” này là công cụ trừng phạt những hình ảnh mang lại tiêu cực cho các thành viên trong ngôi nhà chung này.
            </p>
            <br />
            <h4>Bộ sưu tập!</h4>
            <p>
              Bạn có thể tạo bộ sưu tập chủ đề của riêng mình hoặc chúng tôi sẽ kết hợp với các chủ đề tương tự để tạo ra bộ sưu tập tốt nhất có thể </p>
            <br />
          </div>
          <div className="col-sm-4">
            <span className="Torrent"></span>
          </div>
        </div>
      </div>

      <div className="page2 bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
          <div className="col-sm-8">
            <h2>Giá trị đem đến!</h2>
            <br />
            <h4>Nhiệm vụ: </h4>
            <p>
              Mang lại Trải Nghiệm Tải Torrent Tốt Nhất: eTorrent cam kết cung cấp một nền tảng tải torrent dễ sử dụng, linh hoạt và hiệu quả nhất cho người dùng. Chúng tôi không chỉ tập trung vào việc cung cấp một giao diện thân thiện và dễ dàng tiếp cận, mà còn đảm bảo tính an toàn và bảo mật cho mọi tập tin được chia sẻ trên nền tảng của chúng tôi.
              Tạo Ra Một Cộng Đồng Torrent Phong Phú: eTorrent tạo điều kiện cho việc chia sẻ, kết nối và hợp tác giữa các thành viên của cộng đồng torrent. Chúng tôi khuyến khích sự tham gia tích cực từ các người dùng, tạo ra một không gian mở và đa dạng, nơi mọi người có thể khám phá và chia sẻ nội dung theo sở thích của họ.
              Tôn Trọng Quyền Riêng Tư và Bảo Vệ An Toàn Mạng: eTorrent cam kết bảo vệ thông tin cá nhân của người dùng và đảm bảo tính bảo mật cho mọi giao dịch trên nền tảng của chúng tôi. Chúng tôi tuân thủ các quy định về quyền riêng tư và an ninh mạng, đảm bảo rằng người dùng có thể tải torrent một cách an toàn và không bị ảnh hưởng đến quyền riêng tư của họ.
              Khuyến Khích Sáng Tạo và Hợp Tác: eTorrent khuyến khích sự sáng tạo và hợp tác giữa các thành viên của cộng đồng. Chúng tôi tạo điều kiện cho việc chia sẻ tập tin torrent mới, phát triển các dự án cộng đồng, và xây dựng một môi trường hỗ trợ cho sự sáng tạo và tiến bộ.
            </p>
            <br />
            <h4>Tầm Nhìn của eTorrent: </h4>
            <p>
              Tại eTorrent, chúng tôi tin rằng mọi người đều có quyền truy cập vào thông tin và nội dung một cách dễ dàng và tự do. Tầm nhìn của chúng tôi là tạo ra một nền tảng torrent tiên tiến và bảo mật, mang lại trải nghiệm tải torrent tốt nhất cho mọi người, đồng thời tôn trọng và bảo vệ quyền riêng tư của người dùng. Chúng tôi khát vọng xây dựng một cộng đồng mở và phong phú, nơi mọi người có thể chia sẻ, kết nối và khám phá nội dung một cách tự do và an toàn. </p>
          </div>
        </div>
      </div>
      <div id="contact" className="container-fluid bg-grey ">
        <h2 className="text-center text-white">CONTACT</h2>
        <p className="text-center text-white">
          Contact us and we'll get back to you within 24 hours.
        </p>
        <p className="text-center text-white">Ho Chi Minh, VietNam</p>
        <p className="text-center text-white">+84 091xxxxxxx</p>
        <p className="text-center text-white">20127072@student.hcmus.edu.vn</p>
      </div>
      <FooterWibu />
    </>
  );
}

export default AboutPage;

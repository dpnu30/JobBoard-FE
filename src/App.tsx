import { useState, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Clock,
  MapPin,
  Search,
  Star,
} from "lucide-react";

const SkeletonLoader = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gray-100 rounded-md ${className}`} />
);

export default function JobHunt() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Placeholder data structures
  const [statsData, setStatsData] = useState(
    Array(4).fill({ count: "--", label: "Loading..." })
  );

  const [popularVacancies, setPopularVacancies] = useState(
    Array(8).fill("Loading...")
  );

  const howItWorks = [
    {
      title: "Tạo tài khoản",
      description: "Trước hết, tạo cho mình một tài khoản JobHunt.",
    },
    {
      title: "Tải lên CV của bạn",
      description: "CV sẽ cho nhà tuyển dụng biết thêm nhiều hơn về bạn.",
    },
    {
      title: "Tìm kiếm công việc phù hợp",
      description: "Một công việc đúng với kỹ năng chuyên môn sẽ giúp bạn học được nhiều thứ.",
    },
    {
      title: "Nộp CV cho nhà tuyển dụng",
      description: "Tự tin nộp CV của bạn để nhà tuyển dụng tìm thấy bạn.",
    },
  ];

  const [popularCategories, setPopularCategories] = useState(
    Array(8).fill({ 
      icon: "⏳", 
      title: "Loading...", 
      count: "-- Jobs" 
    })
  );

  const [featuredJobs, setFeaturedJobs] = useState(
    Array(9).fill({
      title: "Loading position...",
      company: "Loading company...",
      location: "Loading location...",
      type: "Loading...",
      salary: "--",
      time: "--",
      logo: "⏳",
    })
  );

  const [topCompanies, setTopCompanies] = useState(
    Array(6).fill({
      name: "Loading company...",
      location: "Loading location...",
      logo: "⏳",
    })
  );

  const [testimonials, setTestimonials] = useState(
    Array(3).fill({
      content: "Loading testimonial...",
      author: "Loading...",
      role: "Loading...",
      avatar: "⏳",
      rating: 5,
    })
  );

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Sau này thêm API calls ở đây:
      // fetchData().then(data => {
      //   setStatsData(data.stats);
      //   setFeaturedJobs(data.jobs);
      //   ...etc
      // });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm ">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl">
              <span className="text-blue-600">Job</span>Hunt
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-base font-medium hover:text-blue-600">Trang chủ</a>
              <a href="#" className="text-base font-medium hover:text-blue-600">Việc làm</a>
              <a href="#" className="text-base font-medium hover:text-blue-600">Công ty</a>
              <a href="#" className="text-base font-medium hover:text-blue-600">Ứng viên</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Button 
              variant="outline" 
              className="text-base text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700"
            >
              Đăng nhập
            </Button>
            <Button 
              className="text-base bg-blue-600 hover:bg-blue-700 text-white"
            >
              Đăng ký
            </Button> 
            <Button className="text-base">Đăng tin tuyển dụng</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section với loading state */}
        <section className="bg-gray-50 py-12 pt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Phần text bên trái */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-relaxed">
                  Tìm kiếm công việc phù hợp<br />
                  <span className="text-blue-600 leading-relaxed">với sở thích của bạn</span>
                </h1>
                
                <p className="text-gray-600 text-lg">
                  Kết nối với hàng nghìn nhà tuyển dụng xung quanh bạn.
                  Cơ hội tìm kiếm việc làm chưa bao giờ dễ dàng đến thế!
                </p>

                {/* Form tìm kiếm */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Search className="text-gray-400 h-5 w-5" />
                    </div>
                    <Input
                      className="pl-12 pr-28 py-6 text-xl h-auto min-h-[60px] rounded-xl border-2 border-gray-300 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500"
                      placeholder="Job title, Keyword..."
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 h-auto text-lg">
                        Tìm kiếm
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span>Ví dụ như:</span>
                  {["Designer", "Lập trình", "Digital Marketing", "Content"].map(
                    (item, index) => (
                      <a key={index} href="#" className="text-blue-600 hover:underline">
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="hidden md:block ml-20">
                <img 
                  src="public/Main.png"
                  alt="Job search illustration"
                  className="w-[500px] h-auto max-w-full mx-auto" 
                />       
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center text-blue-600">
              Cách JobHunt hoạt động
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blue-600">TOP ngành nghề nổi bật</h2>
              <a href="#" className="text-blue-600 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:border-blue-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{category.icon}</div>
                      <div>
                        <h3 className="font-medium">{category.title}</h3>
                        <p className="text-gray-500 text-sm">
                          {category.count}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blue-600">Công việc được đề xuất</h2>
              <a href="#" className="text-blue-600 flex items-center">
                Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <Card
                  key={index}
                  className="hover:border-blue-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center mr-3">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-gray-500 text-sm">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="rounded-full">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="rounded-full">
                        {job.salary}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center text-blue-600">
              Phản hồi từ người dùng JobHunt
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Tôi đã tìm được công việc mơ ước chỉ sau 2 tuần sử dụng JobHunt. Nền tảng cực kỳ dễ sử dụng!"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 bg-blue-100 text-blue-600 mr-3">
                      DN
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Đặng Phương Nam</h4>
                      <p className="text-gray-500 text-sm">Thất nghiệp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Nhờ JobHunt mà công ty chúng tôi đã tìm được những ứng viên chất lượng cao chỉ trong thời gian ngắn."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 bg-green-100 text-green-600 mr-3">
                      NT
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Nguyễn Vũ Anh Tuấn</h4>
                      <p className="text-gray-500 text-sm">HR Manager tại Viettel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Giao diện thân thiện, nhiều việc làm chất lượng. Đặc biệt thích tính năng gợi ý công việc phù hợp!"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 bg-purple-100 text-purple-600 mr-3">
                      HP
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Hoàng Văn Phong</h4>
                      <p className="text-gray-500 text-sm">Fullstack Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-100">
                <CardContent className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Trở thành ứng viên
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Tạo tài khoản và bắt đầu tìm kiếm công việc ngay nào!
                    </p>
                    <Button>Đăng ký ngay!</Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img src="public/candidate.png" alt="Candidate" className="max-h-40" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Trở thành nhà tuyển dụng
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Đăng tải công việc để tìm kiếm ứng viên tiềm năng ngay nào!
                    </p>
                    <Button variant="secondary">Đăng tuyển dụng ngay!</Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img src="public/employer.png" alt="Employer" className="max-h-40" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-bold text-xl mb-4">
                <span className="text-blue-400">Job</span>Hunt
              </div>
              <p className="text-gray-400 mb-4">
                JobHunt - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ hàng đầu Việt Nam.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Candidate</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Jobs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Categories</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Candidate Dashboard</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    My Bookmarks</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Post a job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Employer Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Applications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 JobHunt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

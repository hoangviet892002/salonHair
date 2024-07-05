import { Salon } from "@/types/salon.type";
import { AppleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row } from "antd";

const Shopkeeper = () => {
    const Salon: Salon[] = [
        {
            id: 1,
            name: "chien",
            email: "chienlag1702@gmail.com",
            status: "active",
            description: "wfe",
            address: "quy nhon",
            phone: "097817739",
            logo: "jgioru"
        }
    ]
    return (
        <>
            <div className="flex-1 ">
                
                <div className="w-full  flex  justify-end p-4">
                    <button className="btn btn-secondary ">Thêm Tiệm</button>
                </div>
                <div className="overflow-x-auto flex">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Tên cửa tiệm</th>
                                <th>Địa chỉ</th>
                                <th>Quản lí</th>
                                <th>Trạng thái</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Salon.map((salon, index) => (
                                <tr className="bg-base-200">
                                    <th></th>
                                    <td>{salon.name}</td>
                                    <td>{salon.address}</td>
                                    <td>{ }</td>
                                    <td></td>
                                    <td>

                                        <div className="flex justify-center items-center h-full">
                                            <div className="grid grid-cols-2 gap-4">
                                                <button><EditOutlined/></button>
                                                <button><DeleteOutlined/></button>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
export default Shopkeeper;
import React, { useEffect } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useSelector } from 'react-redux';


function SideBar({ isOpen, toggle }) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    useEffect(() => {

        return () => {
            //
        }
    }, [])

    return (

        <div className={classNames("sidebar", { "is-open": isOpen })}>

            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
                <h3>OfarZ</h3>
            </div>
            {userInfo.item2.name == "Admin" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentlistforadmin"}>
                                Agent List
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/paymenttypes"}>
                                Payment Types
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlists"}>
                                Get All Payment Lists
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsagent"}>
                                Get All Payment Lists Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsAppSharer"}>
                                Get All Payment Lists App Sharer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsShoper"}>
                                Get All Payment Lists Shoper
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistall"}>
                                Get All Withdraw Lists
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistagenttoofarzforadmin"}>
                                Get All Withdraw Lists Agent To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>_____________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistappSharertoagentforadmin"}>
                                Get All Withdraw Lists App Sharer To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistappSharertoofarzforadmin"}>
                                Get All Withdraw Lists App Sharer To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>_____________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistkarrottoagentforadmin"}>
                                Get All Withdraw Lists Karrot To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistkarrottoofarzforadmin"}>
                                Get All Withdraw Lists Karrot To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>_____________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistceotoagentforadmin"}>
                                Get All Withdraw Lists CEO To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistceotoofarzforadmin"}>
                                Get All Withdraw Lists CEO To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundlistagentforadmin"}>
                                Get All Agents Fund Lists
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundlistappsharerforadmin"}>
                                Get All App Sharer Fund Lists
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundlistshopperforadmin"}>
                                Get All Shopper Fund Lists
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundagentforadmin"}>
                                Get Agent Fund
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundappsharerforadmin"}>
                                Get App Sharer Fund
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundshopperforadmin"}>
                                Get Shopper Fund
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundkarrotforAdmin"}>
                                Get Karrot Fund
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundceoforAdmin"}>
                                Get CEO Fund
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundofarzforadmin"}>
                                Get Ofarz Fund
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentadd"}>
                                Add Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/moderatoradd"}>
                                Add Moderator
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/addkarrot"}>
                                Add KARROT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/addceo"}>
                                Add CEO
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/addofarz"}>
                                Add Ofarz
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/adminregistrations"}>
                                Admin Registration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/adminprofileupdate"}>
                                Admin Update Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/adminprofile"}>
                                Admin Profile
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/categories"}>
                                Category
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/subcategories"}>
                                SubCategory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/producttypes"}>
                                ProductType
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/products"}>
                                ProductList
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/productsadmin"}>
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/productcreate"}>
                                Create Product
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/applicationroles"}>
                                Application Role
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/countries"}>
                                Country
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/divisions"}>
                                Division
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/districts"}>
                                District
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/upozilas"}>
                                Upozila
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/unions"}>
                                Union
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/markets"}>
                                Market
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area Codes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ) : (
                    <h1> </h1>)}

            {userInfo.item2.name == "Agent" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/cart"}>
                                Cart
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentOrderList"}>
                                My Order List
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/agnetProductGalleryForCustomer"}>
                                Own Product Gallery
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentprofiledetails"}>
                                Profile
                             </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundagentforagent"}>
                                Get Agent Fund
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentptype"}>
                                Agent Product List
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneyagenttoofarz"}>
                                Cash Out To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistagettoofarzforagent"}>
                                Cash Out List To Ofarz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistagefromforagent"}>
                                Cash Out List From User
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area Codes
                            </NavLink>
                        </NavItem>
                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "Moderator" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>

                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "AppSharer" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>

                        <NavItem>
                            <NavLink tag={Link} to={"/appsharerprofiledetails"}>
                                Profile
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/appsharerprofileupdate"}>
                                Update Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/appshareradddownline"}>
                                AddDownline
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/appsharerfirstdownlinelist"}>
                                First Downline List
                             </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/agentfindforcustomer"}>
                                Find Agent
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/appsharerviewfullagentgallery"}>
                                View Agent Gallery
                             </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/paymentproducttypes"}>
                                Make Payment
                            </NavLink>
                        </NavItem>
                        <SubMenu title="Payment" items={submenus[0]} />
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneyappsharertoagent"}>
                                Cash Out To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneyappsharertoofarz"}>
                                Cash Out To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundsharerforsharer"}>
                                Fund
                             </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsAppSharerForAppSharer"}>
                                Payment List
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsTableCashOfferForAppSharer"}>
                                Payment List Table Cash Offer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsTableCashPromotionalForAppSharer"}>
                                Payment List Table Cash Promotional
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsBackShopingOfferForAppSharer"}>
                                Payment List BackShopping Offer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsBackShoppingPromotionalForAppSharer"}>
                                Payment List BackShopping Promotional
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsMainAccountOfferForAppSharer"}>
                                Payment List Main Account Offer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsMainAccountPromotionalForAppSharer"}>
                                Payment List Main Account Promotional
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistappsharertoagentforappsharer"}>
                                Cash Out List To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistappsharertoofarzforappsharer"}>
                                Cash Out List To Ofarz
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area Codes
                            </NavLink>
                        </NavItem>

                    </Nav>
                </div>) :
                <h1></h1>
            }

            {userInfo.item2.name == "Shoper" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundshoperforshoper"}>
                                Shoper Fund
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/submitpaymenttablecashofferbyshoper"}>
                                Table Cash Payment
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to={"/submitpaymentbackshoppingofferbyshoper"}>
                                Back Shopping Payment
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>

                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsShoperforshopper"}>
                                Payment List All
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsShoperbackshoppingoffer"}>
                                Payment List Back Shopping
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getpaymentlistsShopertablecashoffer"}>
                                Payment List Table Cash
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area Codes
                            </NavLink>
                        </NavItem>

                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "Karrot" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundkarrotforkarrot"}>
                                Fund
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneykarrottoofarz"}>
                                Cash Out To Ofarz
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneykarrottoagent"}>
                                Cash Out To Agent
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistkarrottoofarz"}>
                                Cash Out List To Ofarz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistkarrottoagent"}>
                                Cash Out List To Agent
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "CEO" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/passwordupdate"}>
                                Change Password
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/fundceoforceo"}>
                                Fund
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneyceotoofarz"}>
                                Cash Out To Ofarz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawmoneyceotoagent"}>
                                Cash Out To Agent
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistceotoagent"}>
                                Cash Out List To Agent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/withdrawlistceotoofarz"}>
                                Cash Out List To Ofarz
                            </NavLink>
                        </NavItem>
                    </Nav>

                </div>) :
                <h1></h1>
            }
        </div>
    );
}



const submenus = [
    [
        {
            title: "Offer",
            target: "paymentofferproduct",
        },
        {
            title: "Promotional",
            target: "paymentpromotionalproduct",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];




export default SideBar;

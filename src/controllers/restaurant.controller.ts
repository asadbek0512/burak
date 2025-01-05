import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService()

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.render("home"); // send | render | redirect | json 
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.render("signup")
    } catch (err) {
        console.log("Error, getSignup:", err);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.render("login")
    } catch (err) {
        console.log("Error, getLogin:", err);
        res.redirect("/admin");
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');
        console.log("req.body:", req.body);
        const file = req.file; // multer yuklab berib prossessignup yubroryapti va biz req.file ichidan qabul qilyapmiz
        console.log("file:", file)
        if (!file)
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path; // buyerga provayt qilyapmiz
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;  //
        req.session.save(function () { // Ro‘yxatdan o‘tgan foydalanuvchi ma’lumotlari req.session.member: sessiya ichi saqlanadi.
            res.redirect("/admin/product/all");
        });
    } catch (err) {
        console.log("Error, processSignup:", err);
        const message =
            err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/signup') </script>`
        );
    }
};

restaurantController.processLogin = async (
    req: AdminRequest,
    res: Response) => {
    try {
        console.log('processLogin');

        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

        req.session.member = result;    // Bu jarayon ikkita narsani amalga oshiryapti Cookiesni ichiga tipni(conecton sidni) joylayapti 
        req.session.save(function () { // va databsega borib sessions collection member malumotni saqlayotgan ekan
            res.redirect("/admin/product/all");
        });
    } catch (err) {
        console.log("Error, processLogin:", err);
        const message =
            err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
        );
    }
};

restaurantController.logout = async (
    req: AdminRequest,
    res: Response) => {
    try {
        console.log('logout');
        req.session.destroy(function () { // sessiyani yo'q qilish uchun ishlatiladi.
            res.redirect("/admin");
        })
    } catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin");  // Sessiya yo'q qilingandan keyin foydalanuvchini /admin sahifasiga yo'naltiradi.
    }
};

restaurantController.getUsers = async (req: Request, res: Response) => {
    try {
        console.log('getUser');
        const result = await memberService.getUsers()

        res.render("users", { users: result });
    } catch (err) {
        console.log("Error, getUser:", err);
        res.redirect("/admin/login");
    }
};

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenUser');
        const result = await memberService.updateChosenUser(req.body);

        res.status(HttpCode.OK).json({ data: result });
    } catch (err) {
        console.log("Error, updateChosenUser:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response) => {
    try {
        console.log('checkAuthSession');
        if (req.session?.member) //  req (so‘rov) obyekti ichidagi sessiya ma’lumotlarin borligini va member ega ekanligini tekshiradi.

            res.send(`<script> alert(" ${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTCATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
};
//foydalanuvchi kim ekanligini aniqlab beradi va restaurand user ekanligini aniqlab beradi
restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => {
    if (req.session?.member?.memberType === MemberType.RESTAURANT) {// requsning ichidan kelayotgan sessionimizni ichidan menberni tekshiramiz va o'sha taypei Restarand bo'lishi kerak
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTCATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
        );
    }
};

export default restaurantController;
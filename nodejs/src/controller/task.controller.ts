import { Request, Response } from 'express';
import axios from 'axios';

/**
 * index
 * @param req 
 * @param res 
 * @returns 
 */
export const index = async (req: Request, res: Response) => {
    try {
        const apiResponse = await axios({
            method: 'get',
            url: `${process.env.API_ENDPOINT}`
        });
        const tasks = apiResponse.data.reverse();
        res.render('index', { tasks });
    } catch (error) {
        return res.send(error);
    }
};

/**
 * create
 * @param req 
 * @param res 
 * @returns 
 */
export const create = async (req: Request, res: Response) => {
    try {
        res.render('create');
    } catch (error) {
        return res.send(error);
    }
};

/**
 * store
 * @param req 
 * @param res 
 * @returns 
 */
export const store = async (req: Request, res: Response) => {
    try {
        await axios({
            method: 'post',
            url: `${process.env.API_ENDPOINT}`,
            data: req.body
        });
        res.redirect('/tasks');
    } catch (error) {
        return res.send(error);
    }
};

/**
 * edit
 * @param req 
 * @param res 
 * @returns 
 */
export const edit = async (req: Request, res: Response) => {
    try {
        const apiResponse = await axios({
            method: 'get',
            url: `${process.env.API_ENDPOINT}/${req.params.id}`,
        });
        const task = apiResponse.data;
        res.render('edit', { task });
    } catch (error) {
        return res.send(error);
    }
};

/**
 * update
 * @param req 
 * @param res 
 * @returns 
 */
export const update = async (req: Request, res: Response) => {
    try {
        const apiResponse = await axios({
            method: 'put',
            url: `${process.env.API_ENDPOINT}/${req.params.id}`,
            data: req.body
        });
        res.redirect('/tasks');
    } catch (error) {
        return res.send(error);
    }
};

/**
 * completed
 * @param req 
 * @param res 
 * @returns 
 */
export const completed = async (req: Request, res: Response) => {
    try {
        const apiResponse = await axios({
            method: 'put',
            url: `${process.env.API_ENDPOINT}/${req.params.id}`,
            data: { status: 2 }
        });
        res.redirect('/tasks');
    } catch (error) {
        return res.send(error);
    }
};

/**
 * incomplete
 * @param req 
 * @param res 
 * @returns 
 */
export const incomplete = async (req: Request, res: Response) => {
    try {
        const apiResponse = await axios({
            method: 'put',
            url: `${process.env.API_ENDPOINT}/${req.params.id}`,
            data: { status: 1 }
        });
        res.redirect('/tasks');
    } catch (error) {
        return res.send(error);
    }
};
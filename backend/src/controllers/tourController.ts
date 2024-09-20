import { Request, Response } from 'express';
import { TourService } from '../services/tourService';

export const getTours = async (req: Request, res: Response) => {
  const tours = await TourService.getAllTours();
  res.json(tours);
};

export const getTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tour = await TourService.getTourById(Number(id));
  res.json(tour);
};
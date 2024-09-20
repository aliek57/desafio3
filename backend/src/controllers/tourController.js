import { TourService } from '../services/tourService';
export const getTours = async (req, res) => {
    const tours = await TourService.getAllTours();
    res.json(tours);
};
export const getTour = async (req, res) => {
    const { id } = req.params;
    const tour = await TourService.getTourById(Number(id));
    res.json(tour);
};

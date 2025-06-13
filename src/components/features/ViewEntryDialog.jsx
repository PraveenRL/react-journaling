import { useRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Slide from "@mui/material/Slide";
import Draggable from "react-draggable";
import dayjs from "dayjs";
import { useResponsive } from "../../hooks/useResponsive";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaperComponent = (props) => {
  const nodeRef = useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
};

const ViewEntryDialog = ({ open, handleClose, onEdit, entry }) => {
  const { isMobile } = useResponsive();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      fullScreen={isMobile}
      maxWidth="md"
      slots={{
        transition: isMobile && Transition,
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="view-entry-dialog-title"
    >
      <DialogTitle sx={{ cursor: "move" }} id="view-entry-dialog-title">
        {entry?.title} {entry?.moods.map((mood) => mood.icon)}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            {entry?.date ? dayjs(entry?.date).format("DD-MM-YYYY") : null}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => onEdit()}
          >
            Edit
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{entry?.description}</DialogContentText>
        {entry?.tags &&
          entry.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              onClick={() => console.log()}
              sx={{ mt: 1, mr: 1 }}
            />
          ))}
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 2 }}>
        <Button variant="outlined" onClick={() => handleClose(true)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewEntryDialog;
